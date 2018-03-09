import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchContact} from '../store'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'

export default class Connect extends Component {
  constructor(){
    super()
    this.state = {
      message: ""
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
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
    console.log("before")
    axios.post('/api/contact/', {"name": this.state.name, "email": this.state.email, "message": this.state.message })
      .then(res => {
        console.log("done")
      })
    console.log("after")

  //   event.preventDefault()
  //   // console.log("submot", this.props.fetchContact("hello"))
  // this.props.postContact("hello")
  // console.log("hi")
  }
  render(){
    return (
      <div>
        <nav className = "nav">
          <Link to="/home">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
        <h2> Connect me on : </h2>
        <h3> Email: kelaiyarao1@gmail.com </h3>
        <h3> LinkedIn: https://www.linkedin.com/in/kelaiya-parikh/ </h3>
        <h3> Github: https://github.com/kelaiya </h3>
        <h3> Facebook: https://www.facebook.com/kelaiyaa.rao </h3>
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

// const mapDispatchToProps = function(dispatch) {
//   console.log("hey")
//   return {
//     postContact(message){
//       // console.log("dispatch", typeof(dispatch()))
//       dispatch(fetchContact(message));
//     }
//   }
// }

// export default connect(null, mapDispatchToProps)(Connect)


