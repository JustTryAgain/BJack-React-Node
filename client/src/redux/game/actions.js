import {createRequestAction} from "../../helpers/helpers.js";


export const startGameActionRequest = createRequestAction('START_REQUEST',  (playerNamesArr) => {
  return {
    request: {
      method: "post",
      url: '/start',
      data: {
        playerNames: playerNamesArr,
        token: localStorage.getItem('token') || null,
      }
    }
  }
});

export const hitActionRequest = createRequestAction('HIT_REQUEST',()=>{

});
