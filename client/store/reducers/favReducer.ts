import { favState } from "../../types/states";

const initialState = {
    favOn: false,
};

export const favReducer = (state: favState = initialState, action: any) => {
    switch (action.type) {
        case "TOGGLE_FAV":
            return {
                ...state,
                favOn: !state.favOn,
            };
        case "TOGGLE_NAV_OFF":
            return {
                ...state,
                favOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
