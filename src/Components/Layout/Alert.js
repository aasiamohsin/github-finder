import React, {useContext } from 'react'
import { AlertContext } from '../../Context/Alert/AlertContext'

export const Alert = () => {
    const alertContext = useContext(AlertContext)
    const { alert, deleteAlert } = alertContext;

    return (
            alert !== null && 
            <div style = {styling}>
                <i className="fas fa-exclamation" ></i> 
                {alert}
                <i className="fas fa-times-circle" onClick = {deleteAlert} style = {{color: 'crimson', marginLeft: '150px', cursor: 'pointer'}}></i>
            </div>
    )
}

const styling = {
    color: 'black',
    fontSize: '20px',
}
