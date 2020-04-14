import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footbar from './Footbar';

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
      warning3 : "",
      isemail: false
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
  }

  handleChangeEmail(event){
    this.setState({
      email : event.target.value,
      warning2 : "",
      isemail: false
    })
  }

  handleChangeMessage(event){
    this.setState({
      message : event.target.value,
      warning3 : ""
    })
  }

  handleSubmit(event){
    event.preventDefault()
    var validateEmail = function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
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
    } else if(!validateEmail(this.state.email)){
      this.setState({
        isemail: true
      })
    } else {
      axios.post('/api/contact/', {"name": this.state.name, "email": this.state.email, "message": this.state.message })
        .then(res => {
          console.log("done")
        })
        document.getElementById("reset").reset();
        this.setState({
          greet: "Thanks for your message",
          name: "",
          email: "",
          message: ""
        })
      }
  }
  render(){
    return (
      <div>
        <Navbar />
        <div className="content">
          <h2 className="subtitle"> Connect with me :  </h2>
          <div className="form">
            <form id= "reset" onSubmit={this.handleSubmit} className="form connect">
              <label className="label"> Name     :    </label>
                <input className="input" onChange={this.handleChangeName} />
                {
                    this.state.warning1 && <p className="warning">Name should not be empty</p>
                }
              <label className="label"> Email     :   </label>  
                <input className="input" onChange={this.handleChangeEmail} />
                {
                    this.state.warning2 && <p className="warning">Email should not be empty</p>
                }  
                {
                    this.state.isemail && <p className="warning">Invalid email id</p>
                }          
              <label className="label1"> Message     :     </label>
                <textarea className="input1" onChange={this.handleChangeMessage} />
                {
                    this.state.warning3 && <p className="warning">Message should not be empty</p>
                }
              <button className="button3" type="submit"> Submit </button>
            </form>
            {
              this.state.greet && <h3>{this.state.greet}</h3>
            }
            <button className="button4"><a href="https://drive.google.com/open?id=1IuUUXJgfUSsbx0QYvBU_ICmgbXbhydV1" target="_blank" className="link2"> View my resume </a></button>
          </div>
          <Footbar />
        </div>
      </div>
  )}
}




