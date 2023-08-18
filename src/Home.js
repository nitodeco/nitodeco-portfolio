import React, {useState, useEffect } from 'react';

function calculateAge(birthdate) {
    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    let age = currentYear - birthYear;
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
  
    return age;
  }

const Home = () => {
    

    return (
        <div className="home">
            <div id="welcome-container">
                <h2 id="welcome">Welcome</h2>
            </div>
            <div id="intro-container">
                <p>
                    Hello there! <br/>
                    <br/>
                    I'm Nico, a 21-year-old who's absolutely fascinated by the art of web development. This portfolio is my way of sharing the excitement of my journey with you. Here, I've put together a collection of demo projects that showcase what I've been working on.
                </p>
            </div>
        </div>
    );
}
 
export default Home;