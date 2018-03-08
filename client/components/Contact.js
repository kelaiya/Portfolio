import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {fetchContact} from '../store'


class Contact extends Component {
  constructor(props){
    super(props)
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
    console.log("name", this.state.name)
  }

  handleChangeEmail(event){
    this.setState({
      email : event.target.value
    })
    console.log("email", this.state.email)
  }

  handleChangeMessage(event){
    this.setState({
      message : event.target.value
    })
    console.log("msg", this.state.message)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("submot")
    this.props.fetchContact(this.state.name)
  console.log("hi")
  
  }
  render(){
  return (
      <div>
                <form onSubmit={this.handleSubmit}>
                  <label> Name     :     
                    <input onChange={this.handleChangeName} />
                  </label>
                  <label> Email     :     
                    <input onChange={this.handleChangeEmail} />
                  </label>
                  <label> Message     :     
                    <input onChange={this.handleChangeMessage} />
                  </label>
                  <button type="submit"> Submit </button>
                </form>
              </div>
  )}
}
//  const mapStateToProps = function(state){
//   // images is the value of state in store
//   return {
//     images : state.contact
//   }

// }

 const mapDispatchToProps = function(dispatch) {
  console.log("hey")
  return {
    fetchContact(name){
      console.log("dispatch", dispatch)
      fetchContact(name);
    }
  }
}

export default connect(null, mapDispatchToProps)(Contact)


