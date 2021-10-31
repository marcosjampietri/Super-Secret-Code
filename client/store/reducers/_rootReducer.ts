import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { favReducer } from "./favReducer";



const rootReducer = combineReducers({
    fav: favReducer,


});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;