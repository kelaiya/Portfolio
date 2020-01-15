import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footbar from './Footbar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div>
          <img className="image" src="/IMG_2094.jpg" />
        </div>
        <h2 className="text slogan"> Motto of my life... </h2>
        <p className="text"> The best preparation for tomorrow is doing your best today. </p>
        <h2 className="text slogan"> About me... </h2>
        <p className="text"> I'm an Electronics and Communication Engineer and a former teacher based in NYC, who decided to change careers and learn software development. I taught myself the basic concepts of Java and have passed Oracle certifications in Java. </p> 
        <p className="text"> In mid-2017, I took a big step towards my goals by enrolling into the Grace Hopper Program at Fullstack Academy, a coding academy exclusively for women. This experience changed my life. I learned cutting-edge technologies in software development like Javascript, Node.js, React and Redux.</p>
        <p className="text"> In 2018, I started working as a Software Engineer at Watermark Insights, an Edtech company. I worked on developing application there using Elixir with Phoenix framework and Elm in frontend.</p>
        <p className="text"> What I love about coding is being able to create something tangible out of an idea, and along the way being constantly challenged to creatively to find a solution. I am an incredibly hard worker, who loves colloborating and learning new things. </p>
        <p className="text"> Besides coding I love to sing and explore the world. </p>
        <Footbar />
       </div>    
    </div>
  )
}

export default Main;



