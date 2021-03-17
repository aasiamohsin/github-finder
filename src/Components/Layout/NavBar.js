import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavBar = ({title, icon}) => {
    return (
        <nav className = 'nav-bar'>
            <i className= {icon} ></i>
            <h2>{title}</h2>
            <ul className = 'link'>
                <li>
                    <Link style ={ {padding: '20px'} } to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/about'>About</Link>
                </li>
            </ul>
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
