/**
 * Created by arnold on 7/21/2016.
 */

import dispatcher from "../dispatcher";


export function saveAnswer(answerObject) {
    dispatcher.dispatch({
        type: "SAVE_ANSWER",
        answerObject,
    });
}

export function getResult() {
    dispatcher.dispatch({
        type: "GET_RESULT"
    });
}

