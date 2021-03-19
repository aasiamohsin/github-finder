import React from 'react'
import PropTypes from 'prop-types'

export const Repo = ({repo}) => {
    return (
        <div className = 'repos'>
            <a href = {repo.html_url} target = '_blank' rel = 'noreferrer' >{repo.name}</a>
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired,
}