import { Search_Users, Get_User_Profile, Clear_Users, Get_Repos, Set_Loading } from '../types'

export const GithubReducer = (state, action) => {
    switch(action.type){
        case Search_Users:
            return {
                ...state, 
                users: action.payload,
                loading: false
            }    
        case Clear_Users:
            return {
                ...state, 
                users: []
            }
        case Get_User_Profile:
            return {
                ...state, 
                profileData: action.payload, 
                loading: false
            }
        case Get_Repos:
            return {
                ...state, 
                repos: action.payload, 
                loading: false
            }    
        case Set_Loading:
            return {
                ...state, 
                loading: true
            }
        default:
            return state
    }
}