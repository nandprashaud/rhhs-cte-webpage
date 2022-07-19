import React, { Component } from "react";
import './../../css/App.css';
import Splash from './splash';

class Home extends Component {
  render() {
    return (
      <div>
       
       <Splash/>
    
        <h2 id= "homeH2"> Career and Technical Education programs are made up of elective courses that teach students about different careers. Richmond Hill High School offers several different CTE pathways including: </h2>
        <ul className = "list">
            <li>Hospitalisty & Tourism</li>
            <li>Software Engineering</li>
            <li>Health Sciences</li>
            <li>IT, Enginnering & Robotics</li>
            <li>Art & Design</li>
            <li>Criminology and Forensics</li>
            <li>International</li>
        </ul>
        <h3 id="homeH3">Explore each of our pathways above to learn about what we do at Richmond Hill!</h3>
      </div>
    );
  }
}
export default Home;  