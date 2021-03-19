import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const Search = ({btnText, onSearch, onClickClear, showClear, showAlert}) => {

    const [ text, setText ] = useState('')

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault()

        if(!text){
            showAlert('Please enter username')
        }
        else {
            onSearch(text)
            setText('')
        }
    }
        return (
            <div className = 'form'>
                <form onSubmit = {onSubmit}>
                    <input type="text" name = {text}  placeholder = 'Search Users Profile'
                       value = {text}
                       onChange = {onChange}
                    />
                    <button className = 'search-btn' type = 'submit'><i className="fas fa-search"></i></button>
                </form>
                {
                 showClear &&
                <button className= 'clear-btn' onClick = {onClickClear}>{btnText}</button>
                }
            </div>
        )
}

Search.propTypes = {
    btnText: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClickClear: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
}