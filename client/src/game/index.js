import {Players} from "./players.js";
import {Game} from "./game.js";

const newPlayers = new Players(['Kirill','Maria','Sergio','Fedor']).getPlayers();
export const newGame = new Game(newPlayers);