import React, {Component} from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import Main from './Main'
import Projects from './Projects'
import Connect from './Connect'
import history from '../history'

/**
 * COMPONENT
 */
export default class Routes extends Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Connect} />
        </Switch>
      </Router>
    )
  }
}


