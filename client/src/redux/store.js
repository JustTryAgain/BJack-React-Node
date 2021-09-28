import {applyMiddleware, createStore} from "redux";
import game from "./game/reducer.js";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  responseType: 'json'
});

const store = createStore(
  game,
  applyMiddleware(
    axiosMiddleware(client)
  )
);

export default store;