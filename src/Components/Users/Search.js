import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { GithubContext } from '../../Context/Github/GithubContext'
import { AlertContext } from '../../Context/Alert/AlertContext'

export const Search = ({btnText}) => {

    const [ text, setText ] = useState('')
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const onChange = e => setText(e.target.value)

    const onSubmit = e => {
        e.preventDefault()

        if(!text){
            alertContext.showAlert('Please enter username')
        }
        else {
            githubContext.searchUsers(text)
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
                 githubContext.users.length > 0 &&
                <button className= 'clear-btn' onClick = {githubContext.clearUsers}>{btnText}</button>
                }
            </div>
        )
}

Search.propTypes = {
    btnText: PropTypes.string.isRequired,
}