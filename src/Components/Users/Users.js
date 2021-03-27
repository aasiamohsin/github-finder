import React, {useContext} from 'react'
import { GithubContext } from '../../Context/Github/GithubContext'
import { Profile } from './Profile'
import { Spinner } from '../Layout/Spinner'

export const Users = () => {

    const githubContext = useContext(GithubContext)

    if(githubContext.loading)
    return <Spinner/>

    else

    return (
        <div>
            {githubContext.users.map((profile) => <Profile  key = {profile.id} user = {profile} buttonText = 'Profile' />)}
        </div>
    )
}