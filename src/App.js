import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { NavBar } from './Components/Layout/NavBar'
import { Users } from './Components/Users/Users'
import { UserProfile } from './Components/Users/UserProfile'
import { Search } from './Components/Users/Search'
import { Alert } from './Components/Layout/Alert'
import { About } from './Components/Pages/About'

class App extends Component {

  state = {
    loading: false,
    users: [],
    profileData: {},
    alert: null
  }
  
  // Function to fetch data from API and update users state and loading state
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    this.setState({users: res.data.items, loading: false})
  }

  getUserProfile = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    this.setState({profileData: res.data, loading: false})
  }

  // Function to show alert message and remove message after 5 seconds if input text field is empty
  showAlert = (msg) => {
    this.setState({
      alert: {msg}
    })
    setTimeout(() => {
      this.setState({alert: null})
    }, 5000);
  }

  // Function to delete alert message from state 
  deleteAlert = () => {
    this.setState({alert: null})
  }

  // Function to clear users data from state and set loading to false
  clearUsers = () => {
    this.setState({users: [], loading: false})
  }

  render() {
    const { loading, users, profileData, alert } = this.state
    return (
      <Router>
        <div className="App">
          <NavBar title = 'Github Finder'/>
          <div className = 'container'>
            <Alert alert = {alert} 
                   onDelete = {this.deleteAlert}
            />
            <Switch>
              <Route exact path = '/' render = { props => (
                <Fragment>
                  <Search btnText = 'Clear'
                    onSearch = {this.searchUsers}
                    showAlert = {this.showAlert} 
                    onClickClear = {this.clearUsers}
                    showClear = {users.length > 0 ? true : false}
                  />
                  <Users loading = {loading} usersData = {users}/>
                </Fragment>
              )}>
              </Route>
              <Route exact path = '/About' component = {About}></Route>
              <Route exact path = '/users/:login' render = { props => (
                <UserProfile {...props} userProfile = {this.getUserProfile} profile = {profileData} loading = {loading}/>
              )}>
              </Route>              
            </Switch>  
         </div> 
       </div>
      </Router>
    )
  }
}

export default App;