import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import YouTube from 'react-youtube';

export default class Projects extends Component{
    
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
				    		<p> It is said that one should never stop learning and I am a firm believer of it. I am always curious of learning new technologies some of them are, </p>
				    		<p> Vue.js </p>
				    		<p> Vue.js is a progressive JavaScript framework for building user interfaces. </p> 
			      	</div>
			     </div>
	    )
	  }
}






