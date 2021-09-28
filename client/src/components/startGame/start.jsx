import React, {useCallback, useState} from "react";
import './gameinit.scss'
import InitList from "./initList.jsx";
import {startGameActionRequest} from "../../redux/game/actions";
import {connect} from "react-redux";

const StartGame = () => {
    const [newPlayers, setNewPlayer] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleErrorMessage = useCallback((errMessage) => {
        setErrorMessage(errMessage)
    }, [errorMessage]);

    const getInput = useCallback((event) => {
        setPlayerName(event.target.value)
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
        startGameActionRequest(newPlayers)
    }, [startGameActionRequest, newPlayers]);

    const handlerSubmit = (event) => {
        if (newPlayers.length < 2) {
            handleErrorMessage("There are minimum two players for start game!");
        } else if (errorMessage === '') {
            submitData();
        } else {
            handleErrorMessage("");
            event.preventDefault();
            return false;
        }
    }

    return (
        <div className='init-game'>
            <div className="wrapper-start-game-ctn">
                <div className="init-players">
                    <input
                        type='text' value={playerName}
                        className='form-input' onInput={getInput}
                        placeholder="Input name of new player"
                        name="player-name" maxLength='12'
                    />
                    <div className="buttons-wrapper">
                        <button className="start-game"
                                onClick={handlerSubmit}>
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
    startGameActionRequest
}

export default connect(null, mapDispatchToProps)(StartGame);