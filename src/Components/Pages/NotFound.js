import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p style = {{color: 'black'}}>User you are looking for does not exist.</p>
            <Link to = '/'><button style = {{padding: '10px', marginTop: '5px'}}>Back</button></Link>
        </div>
    )
}
