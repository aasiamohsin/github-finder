import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Fragment, useState } from 'react'
import { NavBar } from './Components/Layout/NavBar'
import { Users } from './Components/Users/Users'
import { UserProfile } from './Components/Users/UserProfile'
import { Search } from './Components/Users/Search'
import { Alert } from './Components/Layout/Alert'
import { About } from './Components/Pages/About'

const App = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [ profileData, setProfileData] = useState({})
  const [repos, setRepos] = useState([])
  const [alert, setAlert] = useState(null)
  
  // Function to fetch data from API and update users state and loading state
  const searchUsers = async (text) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    setUsers(res.data.items)
    setLoading(false)
  }

  const getUserProfile = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    setProfileData(res.data)
    setLoading(false)
  }

  const getUserRepos = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created_at&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    setRepos(res.data)
    setLoading(false)
  }

  // Function to show alert message and remove message after 5 seconds if input text field is empty
  const showAlert = (msg) => {
    setAlert({msg})

    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  // Function to delete alert message from state 
  const deleteAlert = () => {
    setAlert(null)
  }

  // Function to clear users data from state and set loading to false
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

    return (
      <Router>
        <div className="App">
          <NavBar title = 'Github Finder'/>
          <div className = 'container'>
            <Alert alert = {alert} 
                   onDelete = {deleteAlert}
            />
            <Switch>
              <Route exact path = '/' render = { props => (
                <Fragment>
                  <Search btnText = 'Clear'
                    onSearch = {searchUsers}
                    showAlert = {showAlert} 
                    onClickClear = {clearUsers}
                    showClear = {users.length > 0 ? true : false}
                  />
                  <Users loading = {loading} usersData = {users}/>
                </Fragment>
              )}>
              </Route>
              <Route exact path = '/About' component = {About}></Route>
              <Route exact path = '/users/:login' render = { props => (
                <UserProfile {...props} userProfile = {getUserProfile} userRepos = {getUserRepos} reposData = {repos} profile = {profileData} loading = {loading}/>
              )}>
              </Route>              
            </Switch>  
         </div> 
       </div>
      </Router>
    )
  }

export default App;