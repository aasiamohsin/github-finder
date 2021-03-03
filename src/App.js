import './App.css';
import axios from 'axios'
import React, { Component } from 'react'
import { NavBar } from './Components/Layout/NavBar';
import { Users } from './Components/Users/Users';
import { Search } from './Components/Users/Search';

class App extends Component {

  state = {
    loading: false,
    users: []
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRETS}`)
    this.setState({users: res.data, loading: false})
    }

  render() {
    return (
    <div className="App">
      <NavBar title = 'Github Finder'/>
      <div className = 'container'>
        <Search/>
        <Users loading = {this.state.loading} usersData = {this.state.users}/>
      </div> 
    </div>
    )
  }
}

export default App;