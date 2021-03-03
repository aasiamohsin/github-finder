import React from 'react'

export const Alert = ({alert, onDelete}) => {
    return (
            alert !== null &&
            <div style = {styling}>
                <i className="fas fa-exclamation" ></i> 
                {alert.msg}
                <i className="fas fa-times-circle" onClick = {onDelete} style = {{color: 'crimson', marginLeft: '350px', cursor: 'pointer'}}></i>
            </div>
    )
}

const styling = {
    color: 'black',
    fontSize: '20px',
}
