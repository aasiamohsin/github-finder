import React, { useReducer } from 'react'
import { AlertReducer } from './AlertReducer'
import { AlertContext } from './AlertContext'
import { Set_Alert, Remove_Alert, Delete_Alert } from '../types'

export const AlertState = ({children}) => {

    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    // Set Alert
    const showAlert = (msg) => {
        dispatch({
            type: Set_Alert,
            payload:  {alert: msg}
        })
        setTimeout(() => dispatch({
            type: Remove_Alert
        }), 5000)
     }

    // Delete Alert
    const deleteAlert = () => {
        dispatch({
            type: Delete_Alert,
        })
    }

    return <AlertContext.Provider value = {{ alert: state.alert, showAlert, deleteAlert }}>
            {children}
        </AlertContext.Provider>
}