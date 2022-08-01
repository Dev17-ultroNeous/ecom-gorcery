let cart = [];
let favorite = [];

export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case "AddToCart":
            state = state.concat(action.paylod);
            return state;
        default:
            return state;
    }
};
export const favReducer = (state = favorite, action) => {
    switch (action.type) {
        case "AddToFav":
            state = state.concat(action.paylod);
            return state;
        default:
            return state;
    }
};
