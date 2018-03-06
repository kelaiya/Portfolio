import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Projects, Contact} from './components'
import {contact} from './store'

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
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    )
  }
}


