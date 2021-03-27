import React, { useContext } from 'react'
import { GithubContext } from '../../Context/Github/GithubContext'
import { Repo } from './Repo'

export const Repos = () => {
    const githubContext = useContext(GithubContext)

    return (
        <div className = 'repo-container'>
            <h2 style={{textAlign: 'center', marginTop: '15px'}}>Latest GitHub Repositories</h2>
            {githubContext.repos.map( repo => <Repo key = {repo.id} repo = {repo}/> )}
        </div>
    )
}