import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from '../Layout/Spinner'
import { Link } from 'react-router-dom'

export class UserProfile extends Component {

    static propTypes = {
        userProfile: PropTypes.func.isRequired,
        profile: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    componentDidMount() {
        this.props.userProfile(this.props.match.params.login)
    }

    render() {
        const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, repos_url, hireable } = this.props.profile
        const { loading } = this.props

        if (loading) return <Spinner/>
        return (
            <div className = 'user-profile'>
                <Link to = '/'><button className = 'back-btn' >Back</button></Link>
                <strong>
                Hireable: {hireable ? <i className="fas fa-check" style = {{color: 'green', marginLeft: '7px'}}></i> : <i className="fas fa-times-circle" style = {{color: 'crimson', marginLeft: '7px'}}></i>}
                </strong>
                <div className = 'user-info'>
                    <div>
                        <img src={avatar_url} alt = "Profile"></img>
                        <h2>{name}</h2>
                        { login && (
                            <Fragment>
                                <h3 style = {{marginBottom: '5px'}}>{login}</h3>
                            </Fragment>
                        )}
                        { location && (
                            <Fragment>
                                <h4>
                                    Location:  {location}
                                </h4>
                            </Fragment>
                        )}
                        { bio && (
                            <Fragment>
                                <p><strong>Bio: </strong> {bio}</p>
                            </Fragment>
                        )}          
                    </div>
                    <div className = 'off-info'>
                        <a href = {html_url}><button>GitHub Profile</button></a>
                        <ul>
                            <li>
                                { company && (
                                    <Fragment>
                                        <h3>Company: {company}</h3>
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                { blog && (
                                    <Fragment>
                                        <a href = {blog} style = {{textDecoration: 'none'}}>{blog}</a>
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className = 'block'>
                    <div className='followers'>
                        Followers: {followers}
                    </div>
                    <div className = 'followings'>
                        Following: {following}
                    </div>
                    <div className = 'repo'>
                        Public Repos: {public_repos}
                    </div>
                    <div style = {{color: 'gray'}}>
                        Public Gists: {public_gists}
                    </div>
                </div>
            </div>
        )
       
    }
}
