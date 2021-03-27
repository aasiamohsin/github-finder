import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GithubState } from './Context/Github/GithubState'
import { AlertState } from './Context/Alert/AlertState'
import { NavBar } from './Components/Layout/NavBar'
import { Alert } from './Components/Layout/Alert'
import { Home } from './Components/Pages/Home'
import { About } from './Components/Pages/About'
import { UserProfile } from './Components/Users/UserProfile'
import { NotFound } from './Components/Pages/NotFound'

const App = () => {
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <NavBar title = 'Github Finder'/>
                <div className = 'container'>
                  <Alert/>
                  <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/About' component = {About}/>
                    <Route exact path = '/users/:login' component = {UserProfile}/>
                    <Route component = {NotFound}/>
                  </Switch>  
                </div> 
            </div>
          </Router>
        </AlertState>
      </GithubState>
    )
}

export default App;