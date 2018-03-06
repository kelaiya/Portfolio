import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import YouTube from 'react-youtube';

export default class Projects extends Component{
    
    render(){
    	console.log("hey")
	    return (
	           <div>
		           <nav>
				        <Link to="/home">Home</Link>
				        <Link to="/projects">Projects</Link>
				        <Link to="/contact">Contact Me</Link>
				      </nav>
				      
      			<div>
			    		<h1> Grace Hopper Program experience was an awesome one and I made so many interesting projects there. </h1>
			        <div>
			        	<YouTube videoId="0BrDHeQ5hxw" />
			        	<h3> SimpleQL </h3>
			        </div>
			        <div>
			        	<YouTube videoId="iZTnL2dbpvU" />
			        	<h3> Skye </h3>
			        </div> 
			      </div>
			     </div>
	    )
	  }
}






