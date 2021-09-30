import React, {useCallback, useState} from "react";
import './gameinit.scss'
import InitList from "./initList.jsx";
import {startGameAction} from "../../redux/game/actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getToken} from "../../redux/selectors";

const StartGame = ({startGameAction,getToken}) => {
    const [newPlayers, setNewPlayer] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleErrorMessage = useCallback((errMessage) => {
        setErrorMessage(errMessage)
    }, [errorMessage]);

    const getInput = useCallback((event) => {
        setPlayerName(event.target.value);
    }, []);

    const add = useCallback(() => {
        if (playerName.length < 3) {
            handleErrorMessage("Name must be more then 3 symbols!");
            return false;
        }
        if (playerName.length > 3 && playerName.length < 13) {
            handleErrorMessage("");
        }
        if (playerName !== '') {
            setNewPlayer([...newPlayers, playerName])
            setPlayerName('');
        }
    }, [
        playerName,
        newPlayers,
        setNewPlayer,
        setPlayerName
    ]);

    const submitData = useCallback(() => {
        startGameAction(newPlayers, getToken)
    }, [startGameAction, newPlayers]);

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (newPlayers.length < 2) {
            handleErrorMessage("There are minimum two players for start game!");
        } else if (errorMessage === '') {
            submitData();
        } else {
            handleErrorMessage("");
            return false;
        }
    };

    return (
        <div className='init-game'>
            <div className="wrapper-start-game-ctn">
                <div className="init-players">
                    <input
                        type='text' value={playerName}
                        className='form-input' onInput={getInput}
                        placeholder="Input name of new player"
                        autoComplete="off"
                        name="player-name" maxLength='12'
                    />
                    <div className="buttons-wrapper">
                        <button className="start-game"
                                onClick={(e) => {
                                    handlerSubmit(e)
                                }}>
                            <span>Start Game</span>
                        </button>
                        <button className="add-player" onClick={add}>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
                <div className="info-init-players">
                    <div className="error">
                        {errorMessage}
                    </div>
                    <InitList initialPlayers={newPlayers}
                              setInitialPlayers={setNewPlayer}/>
                </div>
            </div>
        </div>);
}

const mapDispatchToProps = {
    startGameAction
}
const mapStateToProps = createStructuredSelector({
   getToken
});
export default connect(mapStateToProps, mapDispatchToProps)(StartGame);