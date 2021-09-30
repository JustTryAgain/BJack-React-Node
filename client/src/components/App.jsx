import React, {useEffect} from "react";
import Game from "./startGame/game.jsx";
import StartGame from "./startGame/start.jsx";
import {connect, useDispatch} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getStateAction, startGameAction} from "../redux/game/actions.js";
import {getToken, isGameStart} from "../redux/selectors";


const App = ({isGameStart, getToken}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStateAction(getToken));
    }, []);

    return (
        <>
            {isGameStart ? <Game/> : <StartGame/>}
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    isGameStart,
    getToken
});

const mapDispatchToProps = {
    startGameAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);