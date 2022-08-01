import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/Reducer";
import { cartReducer, favReducer } from "./Redux/Reducer/cartappreducer";
export default configureStore({
    reducer: {
        rootReducer,
        cartReducer,
        favReducer,
    },
});
