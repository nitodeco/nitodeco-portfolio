import { useState, useEffect } from 'react';

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

function useScrollDirection() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [direction, setDirection] = useState('up');

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setDirection('down');
            } else {
                setDirection('up');
            }
            setLastScrollTop(scrollTop);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return direction;
}

const Home = () => {
    const birthdate = new Date('2002-02-23');
    const age = calculateAge(birthdate);

    const scrollDirection = useScrollDirection();

    return (
        <div className="home">
            <div className={ `titleContainer ${scrollDirection === 'up' ? 'show' : 'hide'}`}>
                <h2 className="title">Welcome</h2>
            </div>
            <div id="intro-container">
                <p>
                    Hello there! <br/>
                    <br/>
                    I'm Nico, a {age}-year-old based in Germany who's absolutely passionate of web development. <br /> 
                    This portfolio is my way of sharing the excitement of my journey with you. <br /> 
                    Here, I've put together a collection of demo projects that showcase what I've been working on <br/>
                    in order to improve my skills.
                </p>
            </div>
        </div>
    );
}
 
export default Home;