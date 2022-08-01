import { combineReducers } from "redux";
import counterReducer from "./updown";
const rootReducer = combineReducers({
    counterReducer,
});
export default rootReducer;
