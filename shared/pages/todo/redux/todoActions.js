import { ADD_TODO, MARK_FINISH } from "./todoConstants";

export const add = (title) => ({ type: ADD_TODO, payload: title });
export const finish = (id, finished) => ({ type: MARK_FINISH, payload: [id, finished] });