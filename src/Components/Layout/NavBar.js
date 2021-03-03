import React from 'react'
import PropTypes from 'prop-types'

export const NavBar = ({title, icon}) => {
    return (
        <nav className = 'nav-bar'>
            <i className= {icon} ></i>
            <h2>{title}</h2>
        </nav>
    )
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github fa-4x'
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
