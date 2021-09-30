import {createSelector} from "reselect";

const state = (state) => state;

export const players = createSelector(
  state,
  (state) => state.players
);

export const winners = createSelector(
  state,
  state => state.winners
);

export const currentPlayer = createSelector(
  state,
  state => state.currentPlayer
);

export const getPlayersId = createSelector(
  players,
  (state) => state.map((player) => {
    return player.Id;
  })
);

export const getDeckSize = createSelector(
  state,
  state => state.deckSize
);

export const isGameStart = createSelector(
    state,
    state => state.isGameStart
);

export const getToken = createSelector(
    state,
    state => state.token
);
