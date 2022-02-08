import { actionsConstants } from "../actionTypes"

export const addToCart = (product) => {
    return({
        type: actionsConstants.ADD_TO_CART,
        payload: product
    })
}

export const removeFromCart = (product) => {
    return({
        type: actionsConstants.REMOVE_FROM_CART,
        payload: product
    })
}