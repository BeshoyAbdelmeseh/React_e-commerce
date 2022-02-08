import { actionsConstants } from "../actionTypes";

export const setProducts = (product) => {
    return({
        type: actionsConstants.SET_PRODUCTS,
        payload: product
    })
}

export const setCurrency = (currency) => {
    return({
        type: actionsConstants.SET_CURRENCY,
        payload: currency
    })
}