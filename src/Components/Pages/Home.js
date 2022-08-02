import React, { Component } from "react";
import './../../css/App.css';
import Splash from './splash';

class Home extends Component {
  render() {
    return (
      <div>
       
       <Splash/>
        <div id= "body" >
            <h2 id= "homeH2"> Career and Technical Education programs are made up of elective courses that teach students about different careers. Richmond Hill High School offers several different CTE pathways including: </h2>
            <ul className = "list">
                <li><a href="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932678&type=d&pREC_ID=2066003">Hospitalisty & Tourism</a></li>
                <li><a href="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932698&type=d&pREC_ID=2065998">Software Engineering</a></li>
                <li><a href="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932673&type=d&pREC_ID=2066028">Health Sciences</a></li>
                <li><a href="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932679&type=d&pREC_ID=2066019">IT, Enginnering & Robotics</a></li>
                <li><a href="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932672&type=d&pREC_ID=2066008">Art & Design</a></li>
                <li><a href="https://www.richmondhillhs.org/apps/pages/index.jsp?uREC_ID=1932671&type=d&pREC_ID=2065993">Criminology and Forensics</a></li>
            </ul>
            <h3 id="homeH3">Explore each of our pathways above to learn about what we do at Richmond Hill!</h3>
<h4 id= "homeH4"> Watch one of our videos below </h4>
<iframe id = "video"  src="https://www.youtube.com/embed/RIJGUwAQxDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

        </div>
        
      </div>
    );
  }
}
export default Home;  