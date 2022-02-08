import { actionsConstants } from "../actionTypes";

const intialState = []

export const cartReducer = (state = intialState, {type, payload}) => {
    if (type === actionsConstants.ADD_TO_CART){
        const findDuplicate = state.filter(item => item.specialId === payload.specialId);
                                              
        if (findDuplicate.length > 0){
            findDuplicate[0].count = findDuplicate[0].count + 1;
        }
        else{
            state.push({...payload, count: 1})
        }
        return [...state];
    }
    else if (type === actionsConstants.REMOVE_FROM_CART){
        const findDuplicate = state.filter(item => item.specialId === payload.specialId);
        
        if (findDuplicate.length > 0){
            const count = findDuplicate[0].count;
            if (count >= 2){
                findDuplicate[0].count = count - 1;
            }
            else{
                const filteredState = state.filter(item => item.specialId !== payload.specialId);
                state = filteredState;
            }
        }
        return [...state];
    }
    else{
        return state;
    }
}