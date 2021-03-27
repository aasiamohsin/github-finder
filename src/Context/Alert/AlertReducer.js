import { Set_Alert, Remove_Alert, Delete_Alert } from '../types'

export const AlertReducer = (state, action) => {
    switch(action.type){
        case Set_Alert:
            return action.payload
        case Remove_Alert:
            return { alert: null }
        case Delete_Alert:
            return { alert: null }
        default:
            return state
    }
}