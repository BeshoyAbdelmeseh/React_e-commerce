import { combineReducers } from "redux";
import { productsReducer } from "./products.reducer";
import { cartReducer } from "./cart.reducer";

const combinedReducers = combineReducers({
    productsReducer: productsReducer,
    cartReducer: cartReducer
})

export default combinedReducers;