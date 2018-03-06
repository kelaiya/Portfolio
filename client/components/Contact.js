import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchContact} from '../store'


class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name : "",
      email: "",
      message: ""
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(event){
    this.setState({
      name : event.target.value
    })
  }

  handleChangeEmail(event){
    this.setState({
      email : event.target.value
    })
  }

  handleChangeMessage(event){
    this.setState({
      message : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.fetchContact(this.state.name, this.state.email, this.state.message)
  }
  render(){
  return (
      <div>
                <form onSubmit={this.handleSubmit} className="data">
                  <label> Name     :     
                    <input type="text" onChange={this.handleChangeName} />
                  </label>
                  <label> Email     :     
                    <input type="text" onChange={this.handleChangeEmail} />
                  </label>
                  <label> Message     :     
                    <input type="text" onChange={this.handleChangeMessage} />
                  </label>
                  <button type="submit"> Search </button>
                </form>
              </div>
  )}
}
 const mapDispatchToProps = function(dispatch) {
  return {
    fetchContact(name, email, message){
      dispatch(fetchContact(name, email, message));
    }
  }
}

export default Contact


