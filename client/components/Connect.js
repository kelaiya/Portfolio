import React, {Component} from 'react'
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
  }
  render(){
    return (
      <div>
        <h1 className="title">Kelaiya Parikh</h1>
        <nav className = "nav">
          <Link to="/home" className="link">Home</Link>
          <Link to="/projects" className="link1">Projects / Skills</Link>
          <Link to="/contact" className="link">Contact Me</Link>
        </nav>
        <div className="content">
        <h2 className="subtitle"> Connect with me on : </h2>
        <div className="form">
          <form onSubmit={this.handleSubmit} className="form connect">
            <label className="label"> Name     :    </label>
            <input className="input" onChange={this.handleChangeName} />
            <label className="label"> Email     :   </label>  
            <input className="input" onChange={this.handleChangeEmail} />
            <label className="label1"> Message     :     </label>
            <input className="input1" onChange={this.handleChangeMessage} />
            <button className="button3" type="submit"> Submit </button>
          </form>
        </div>
        <div className="logos">
          <a className="icon" href="mailto:kelaiyarao1@gmail.com">
            <img className="logo-img" src="/gmail.png" />
          </a>
          <a className="icon" href="https://www.linkedin.com/in/kelaiya-parikh">
            <img className="logo-img" src="/linkedin.png" />
          </a>
          <a className="icon" href="https://github.com/kelaiya">
            <img className="logo-img" src="/git.png" />
          </a>
        </div>
        </div>
      </div>
  )}
}




