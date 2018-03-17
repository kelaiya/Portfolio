import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import YouTube from 'react-youtube';

export default class Projects extends Component{
    
    render(){
    	var frontend = ["React", "Redux", "Javascript", "jQuery", "AJAX", "HTML5", "CSS5", "FlexBox"];
    	var backend = ["Node.js", "Sequelize", "SQL", "Express", "Java", "Ruby"];
    	var other = ["Mocha", "Chai", "Git", "Webpack"]
	    return (
	           <div>
		          <h1 className="title">Kelaiya Parikh</h1>
				      <nav className = "nav">
				        <Link to="/home" className="link">Home</Link>
				        <Link to="/projects" className="link1">Projects / Skills</Link>
				        <Link to="/contact" className="link">Contact Me</Link>
				      </nav>
				    	<div className="content">
				    		<h2 className="subtitle"> Skills </h2> 
      					<div className="skills">
			        		<div>
				        		<h3> Front-End </h3>
				        		<ul>
				        		{
						        	frontend.map(function(x, i){
						        		return <p key={i}>{x}</p>
						        	})
						        }
						        </ul>
						      </div>
						      <div>
						        <h3> Back-End </h3>
						        <ul>
						        {
						        	backend.map(function(x, i){
						        		return <p key={i}>{x}</p>
						        	})
						        }
						        </ul>
				      		</div>
					        <div>
						        <h3> Others </h3>
						        <ul>
						        {
						        	other.map(function(x, i){
						        		return <p key={i}>{x}</p>
						        	})
						        }
						        </ul>
						      </div>
				     		</div>
				     		<h2 className="subtitle"> Projects </h2>
			        	<div>
			        		<h2 className="text"> SimpleQL </h2>
			        		<div className="code">
			        			<a href="http://www.simpleql.tech" className="under"><button className="button2" type="submit"> Website </button></a>
			        			<a href="https://github.com/kelaiya/ER2SQL" className="under"><button className="button" type="submit"> GitHub </button></a>
			        		</div>
			        		<p className="text"><b> Description: </b>A web app which creates and stores databases on AWS RDS, visualizes it with schemas and gives SQL scripts downloadable to user’s local machine. It also takes data from users using CSV files and gives API endpoints to all the account holders. </p>
									<p className="text"><b> Technologies used: </b>Javascript, React-Redux, Node.js, AWS-RDS, Express, Sequelize </p>
 									<div className="video">
 										<YouTube videoId="0BrDHeQ5hxw" />
 									</div>
				        </div>
				        <div>
				        	<h2 className="text"> Skye </h2>
				        	<div className="code">
				        		<a href="https://github.com/kelaiya/MyProject" className="under"><button className="button2" type="submit"> GitHub </button></a>
				        	</div>
				        	<p className="text"><b> Description: </b>A mobile app that tracks your location, obtains accurate weather information, and then suggests    things to do based on the forecast. </p>
									<p className="text"><b> Technologies used: </b>React-Native, Stack Navigation, CSS </p>
				        	<div className="video">
				        		<YouTube videoId="iZTnL2dbpvU" />
				        	</div>
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
	    )
	  }
}






