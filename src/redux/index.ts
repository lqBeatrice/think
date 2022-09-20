import { legacy_createStore as createStore, combineReducers } from "redux";
import globalReducer from "@/redux/modules/global/reducer";

const reducer = combineReducers({
    global: globalReducer
})

const store = createStore(reducer)

export default store;