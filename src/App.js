import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
import { NavBar } from './Components/Layout/NavBar';
import { Users } from './Components/Users/Users';
import { Search } from './Components/Users/Search';
import { Alert } from './Components/Layout/Alert'

class App extends Component {

  state = {
    loading: false,
    users: [],
    alert: null
  }
  
  // Function to fetch data from API and update users state and loading state
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    this.setState({users: res.data.items, loading: false})
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
    const { loading, users, alert } = this.state
    return (
    <div className="App">
      <NavBar title = 'Github Finder'/>
      <div className = 'container'>
        <Alert alert = {alert} 
               onDelete = {this.deleteAlert}
              />
        <Search btnText = 'Clear'
                onSearch = {this.searchUsers}
                showAlert = {this.showAlert} 
                onClickClear = {this.clearUsers}
                showClear = {users.length > 0 ? true : false}
              />
        <Users loading = {loading} usersData = {users}/>
      </div> 
    </div>
    )
  }
}

export default App;