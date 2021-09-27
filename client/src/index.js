import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import './main.scss';

import {Game} from "./game/game";
import {Players} from "./game/players";

const newPlayers = new Players(['Kirill','Maria','Sergio','Fedor']).getPlayers();
const newGame = new Game(newPlayers);
console.log(newGame);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);