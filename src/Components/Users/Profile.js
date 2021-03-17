import React from 'react'
import { Link } from  'react-router-dom'
import PropTypes from 'prop-types'

export const Profile = ({user, buttonText}) => {

    const { login, avatar_url } = user

    return (
        <div className = 'profile'>
            <img src = {avatar_url} alt = 'img'></img>
            <h3>{login}</h3>
            <Link to = {`/users/${login}`}><button>{buttonText}</button></Link>
        </div>
    )
}

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    buttonText: PropTypes.string.isRequired
}


