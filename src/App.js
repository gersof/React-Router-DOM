import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/header.js'
import Login from './components/login.js'
import Home from './components/home.js'
import Page1 from './components/page1.js'


class App extends Component {
  constructor() {
    super()
    this.state = { isLogged: true }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => {
            if (this.state.isLogged) {
              return (
                <div>
                  <Header />
                  <Home />
                </div>
              )
            } else {
              return (
                <Redirect to="/login"/>
              )
            }
          }} />

          <Route path='/home' render={() => {
            if (this.state.isLogged) {
              return (
                <div>
                  <Header />
                  <Home />
                </div>
              )
            } else {
              return (
                <Login />
              )
            }
          }} />

          <Route path='/page1' render={() => {
            return (
              <div>
              <Header />
              <Page1 />
              </div>
            )
          }} />
          <Route path='/login' render={() => {
            return (
              <Login />
            )
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
