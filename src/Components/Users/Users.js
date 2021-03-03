import React from 'react'
import PropTypes from 'prop-types'
import { Profile } from './Profile'
import { Spinner } from '../Layout/Spinner'

export const Users = (props) => {

        const users = props.usersData
        const spinner = props.loading

        if(spinner)
        return <Spinner/>

        else

        return (
            <div style = {profileStyling} >
               {users.map((profile) => <Profile  key = {profile.id} user = {profile} buttonText = 'Profile' />)}
            </div>            
        )
    
}

const profileStyling = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '15px'
}

Users.propTypes = {
    usersData: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
