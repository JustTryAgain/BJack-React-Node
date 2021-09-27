import {applyMiddleware, createStore} from "redux";
import game from "./game/reducer.js";

const store = createStore(
  game
);

export default store;