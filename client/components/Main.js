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
        <h2 className="text slogan"> Motto of my life </h2>
        <p className="text"> The best preparation for tomorrow is doing your best today </p>
        <h2 className="text slogan"> About me... </h2>
        <p className="text"> I'm an Electronics and Communication Engineer and a former teacher who decided to change careers and learn software development. I have spent the better part of the last 3 years learning how to code and have passed certifications in Java. </p> 
        <p className="text">In May 2017, I took a big step towards my goals by enrolling into the Grace Hopper Program at Fullstack Academy, a coding academy exclusively for women. This place changed my life. I learned cutting-edge technologies and now I am ready to apply these newfound skills to an engineering role.</p>
        <p className="text"> What I love about coding is being able create something tangible out of an idea, and along the way being constantly challenged and forced to think creatively for a solution. I am an extremely hard worker, who loves working in teams and learning new things. </p>
        <h2 className="text slogan"> I love to do... </h2>
        <p className="text"> Sing. I gave several stage shows singing Bollywood songs </p>
        <p className="text"> Explore the world. I recently went to Japan. I was delighted with its artistic originality, effortless elegance and endless beauty </p>
        <p className="text"> Ofcourse, to code. I love because it is a usable art. </p>
        <Footbar />
       </div>    
    </div>
  )
}

export default Main;



