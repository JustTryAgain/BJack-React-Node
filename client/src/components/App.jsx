import React from "react";
import Game from "./startGame/game.jsx";
import StartGame from "./startGame/start.jsx";
import {connect} from "react-redux";
import {isGameStart} from "../redux/selectors.js";
import {createStructuredSelector} from "reselect";
import {startGameActionRequest} from "../redux/game/actions.js";

const App = () => {
  return (
    <>
      {isGameStart ? <Game/> : <StartGame/>}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  isGameStart
});
const mapDispatchToProps = {
  startGameActionRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);