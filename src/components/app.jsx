import React, { Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import Main from './main.jsx'

class App extends Component {
  render () {
    const routes = (
      <Route path='/' component={Main} />
    )

    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    )
  }
}

export default App
