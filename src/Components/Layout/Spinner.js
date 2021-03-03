import React, { Fragment } from 'react'
import spinner from './spinner.gif'

export const Spinner = () => {
    return (
        <Fragment>
            <img src = {spinner} alt = 'loading' style = {styling}></img>
        </Fragment>
    )
}

const styling = {
    width: '200px',
    marginTop: '150px'
}