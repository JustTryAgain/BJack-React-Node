import React, {useCallback, useState} from "react";
import './gameinit.scss'
import InitList from "./initList.jsx";
import {getHistoryAction, startGameAction} from "../../redux/game/actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getToken, history} from "../../redux/selectors";
import ShowHistory from "./showHistory";

const StartGame = ({startGameAction, getToken, getHistoryAction, history}) => {
    const [newPlayers, setNewPlayer] = useState([]);
    const [playerName, setPlayerName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [show, setShow] = useState(false);

    const handleShow = useCallback(()=>{
        setShow(!show);
    },[show]);

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
        if (playerName.length > 3 && playerName.length < 12) {
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
                        name="player-name" maxLength='11'
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
            {show ? <ShowHistory show={handleShow} history={history}/> : <button className='show-history'
            onClick={()=> {
                getHistoryAction(getToken)
                handleShow()
            }}>
                Show game history
            </button>}
        </div>);
}

const mapDispatchToProps = {
    startGameAction,
    getHistoryAction
}
const mapStateToProps = createStructuredSelector({
    getToken,
    history
});
export default connect(mapStateToProps, mapDispatchToProps)(StartGame);