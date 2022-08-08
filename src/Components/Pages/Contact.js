import React from 'react';
import Teacherinfo from './Teacherinfo';
import  '../../css/Card.css';

const Contact = ({title,imageUrl,body}) => {
  return (
    <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        }}
    >
       <div>
      <h1>Contact Us</h1>
      </div> </div>
      <div className="container" >
          <h3 className="centertext">12th grade</h3>
        <ul className="cards"className ="gradedivide"
      ><Teacherinfo
          imageUrl='Image for each teacher'
          title ='Mr. Dominguez'
          body='Teacher for Computer Science and the City'
          email ='jdominguez@richmondhillhs.org '
          />
      </ul>
      <h3 className="centertext">11th grade</h3>
      <ul className="cards"class ="gradedivide">
        <Teacherinfo
          imageUrl='../../images/Canzoneri.jpg'
          title ='Ms.Pak'
          body='Teacher for AP Computer Science Principles'
          email ='spak@richmondhillhs.org'
          />
      </ul>
          <h3 class="centertext">10th grade</h3>
      <ul className="cards"class ="gradedivide">
        <Teacherinfo
          imageUrl='Image for each teacher'
          title ='Ms. Pak'
          body='Teacher for Exploring Computer Science'
          email ='spak@richmondhillhs.org'
          />

      </ul>
      <h3 class="centertext">9th grade</h3>
      <ul className="cards"class ="gradedivide">
        <Teacherinfo
          imageUrl='Image for each teacher'
          title ='Ms. Pak'
          body='Teacher for TEALS Intro to Computer Science'
          email ='spak@richmondhillhs.org'
          />
      </ul>
      </div>
      </div>

  );
};

export default Contact;