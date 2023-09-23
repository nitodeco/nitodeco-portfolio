import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollDirection } from "../utils";

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

const Resume = () => {
    const birthdate = new Date('2002-02-23');
    const age = calculateAge(birthdate);

    const location = useLocation();
    const scrollDirection = useScrollDirection();

    const elementRef = useRef(null);

    useEffect(() => {
        scrollDirection.reset();
    }, [location.pathname], scrollDirection);

    const skills = [
        {
          aspect: 'Web Development',
          items: ['HTML - CSS', 'JavaScript - TypeScript', 'Node.js', 'Express.js'],
        },
        {
          aspect: 'Adobe',
          items: ['Lightroom', 'Photoshop', 'Illustrator', 'Premiere Pro'],
        }
      ];

    return (
        <div className="home">
            <div id="title-card" className={ `titleContainer ${scrollDirection.direction === 'up' ? 'show' : 'hide'}`}>
                <h2 className="title">Welcome</h2>
            </div>
            <div className="intro-content">
                <div>
                    <img id="profile-img" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Portrait of Nico" />
                </div>
                <p id="intro-text">
                    Hello there! <br />
                    <br />
                    I'm Nico, a {age}-year-old web developer based in Germany.
                    This portfolio is my way of sharing the excitement of my journey with you.
                    Here, I've put together a collection of demo projects that showcase what I've been working on
                    in order to improve my skills. Enjoy!
                </p>
            </div>
            <div className='resume'>
                {skills.map((skill, index) => (
                    <div key={index} className='skill mono'>
                    <h2>{skill.aspect}</h2>
                    <ul className='grid-list'>
                        {skill.items.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Resume;