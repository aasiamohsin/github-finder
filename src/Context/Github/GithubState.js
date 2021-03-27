import React, { useReducer } from 'react'
import axios from 'axios'
import { GithubContext } from './GithubContext'
import { GithubReducer } from './GithubReducer'
import { Search_Users, Get_User_Profile, Clear_Users, Get_Repos, Set_Loading } from '../types'

export const GithubState = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
        profileData: {},
        repos: [], 
    }

    let clientId 
    let clientSecret

    if(process.env.NODE_ENV !== 'production'){
        clientId = process.env.REACT_APP_GITHUB_CLIENT_ID
        clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRETS
    } else {
        clientId = process.env.GITHUB_CLIENT_ID
        clientSecret = process.env.GITHUB_CLIENT_SECRETS
    }

    const[state, dispatch] = useReducer(GithubReducer, initialState)

    // Search Users
    const searchUsers = async (text) => {
        loading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`)
        dispatch({
            type: Search_Users,
            payload: res.data.items
        })
    }

    // Get Users
    const getUserProfile = async (username) => {
        loading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
        dispatch({
            type: Get_User_Profile,
            payload: res.data
        })
    }

    // Clear Users
    const clearUsers = () => {
        dispatch({
            type: Clear_Users
        })
    }

    // Get Repos
  const getUserRepos = async (username) => {
    loading()
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created_at&client_id=${clientId}&client_secret=${clientSecret}`)
    dispatch({
        type: Get_Repos,
        payload: res.data
    })
  }

    // Set Loading
    const loading = () => {
        dispatch({type: Set_Loading})
    }
        
    return <GithubContext.Provider value = {{users: state.users,
                                            loading: state.loading, 
                                            profileData: state.profileData, 
                                            repos: state.repos,
                                            searchUsers,
                                            clearUsers,
                                            getUserProfile,
                                            getUserRepos
                                            }}>
        {children}
    </GithubContext.Provider>
}