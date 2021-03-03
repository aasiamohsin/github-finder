import React from 'react'
import PropTypes from 'prop-types'

export const Profile = ({user, buttonText}) => {

    const { login, avatar_url, html_url } = user

    return (
        <div className = 'profile'>
            <img src = {avatar_url} alt = 'img'></img>
            <h3>{login}</h3>
            <a href = {html_url}><button>{buttonText}</button></a>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    buttonText: PropTypes.string.isRequired
}


