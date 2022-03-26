import { combineReducers } from "redux";

import user from './token/reducer';

const rootReducer = combineReducers({user})

export default rootReducer;