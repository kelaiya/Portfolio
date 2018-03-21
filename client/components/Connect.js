import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import axios from 'axios'

export default class Connect extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      email: "",
      message: "",
      greet: "",
      warning1 : "",
      warning2 : "",
      warning3 : ""
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }
  
  handleChangeName(event){
    this.setState({
      name : event.target.value,
      warning1 : ""
    })
    console.log("name", this.state.name)
  }

  handleChangeEmail(event){
    this.setState({
      email : event.target.value,
      warning2 : ""
    })
    console.log("email", this.state.email)
  }

  handleChangeMessage(event){
    this.setState({
      message : event.target.value,
      warning3 : ""
    })
    console.log("msg", this.state.message)
  }

  handleSubmit(event){
    event.preventDefault()
    if(this.state.name == ""){
      this.setState({
        warning1: "Please fill the field"
      })
    } else if (this.state.email == ""){
      this.setState({
        warning2: "Please fill the field"
      })
    } else if (this.state.message == ""){
      this.setState({
        warning3: "Please fill the field"
      })
    } else {
      axios.post('/api/contact/', {"name": this.state.name, "email": this.state.email, "message": this.state.message })
        .then(res => {
          console.log("done")
        })
        document.getElementById("reset").reset();
        this.setState({
          greet: "Thanks for your message"
        })
      }
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
        <h2 className="subtitle"> Connect with me :  </h2>
        <div className="form">
          <form id= "reset" onSubmit={this.handleSubmit} className="form connect">
            <label className="label"> Name     :    </label>
              <input className="input" onChange={this.handleChangeName} />
              {
                  this.state.warning1 && <p className="warning">Please fill the name section</p>
              }
            <label className="label"> Email     :   </label>  
              <input className="input" onChange={this.handleChangeEmail} />
              {
                  this.state.warning2 && <p>Please fill email section</p>
              }            
            <label className="label1"> Message     :     </label>
              <input className="input1" onChange={this.handleChangeMessage} />
              {
                  this.state.warning3 && <p>Please fill message section</p>
              }
            <button className="button3" type="submit"> Submit </button>
          </form>
          {
            this.state.greet && <h3>{this.state.greet}</h3>
          }
          <button className="button4"><a href="https://drive.google.com/file/d/1yJZxLUbP-3LM15COgIV_6xm_9esFQpWR/view?usp=sharing" target="_blank" className="link2"> View my resume </a></button>
        </div>

        <div className="logos">
          <a className="icon" href="mailto:kelaiyarao1@gmail.com" target="_blank">
            <img className="logo-img" src="/gmail.png" />
          </a>
          <a className="icon" href="https://www.linkedin.com/in/kelaiya-parikh" target="_blank">
            <img className="logo-img" src="/linkedin.png" />
          </a>
          <a className="icon" href="https://github.com/kelaiya" target="_blank">
            <img className="logo-img" src="/git.png" />
          </a>
        </div>
        </div>
      </div>
  )}
}




