import { actionsConstants } from "../actionTypes";

const intialState = {
    products: [],
    currency: {
        label: "USD",
        symbol: "$"
    }
}

export const productsReducer = (state = intialState, {type, payload}) => {
    if (type === actionsConstants.SET_PRODUCTS){
        return {...state, products: [...state.products, payload]};
    }
    else if (type === actionsConstants.SET_CURRENCY){
        return {...state, currency: payload};
    }
    else{
        return state;
    }
}