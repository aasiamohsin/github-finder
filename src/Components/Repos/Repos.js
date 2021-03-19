import React from 'react'
import PropTypes from 'prop-types'
import { Repo } from './Repo'

export const Repos = ({repos}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Latest GitHub Repositories</h2>
            {repos.map( repo => <Repo key = {repo.id} repo = {repo}/> )}
        </div>
    )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}