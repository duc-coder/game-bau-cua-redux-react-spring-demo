import { combineReducers } from "redux";
import { bauCuaReducer } from "./BauCuaReducer";

export const rootReducer = combineReducers({
    bauCuaReducer: bauCuaReducer
})