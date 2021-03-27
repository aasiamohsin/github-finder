import React, { Fragment } from 'react'
import { Search } from '../../Components/Users/Search'
import { Users } from '../Users/Users'

export const Home = () => {

    return (
        <Fragment>
            <Search btnText = 'Clear'/>
            <Users/>
        </Fragment>
    )
}
