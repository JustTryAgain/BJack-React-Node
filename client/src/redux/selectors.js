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