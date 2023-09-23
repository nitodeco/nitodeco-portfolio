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

    const scrollDirection = useScrollDirection();

    return (
        <div className="home">
            <div className={ `titleContainer ${scrollDirection === 'up' ? 'show' : 'hide'}`}>
                <h2 className="title">Welcome</h2>
            </div>
            <div className="intro-container">
                <div className="intro-content">
                    <div>
                        <img id="profile-img" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Portrait of Nico" />
                    </div>
                    <p id="intro-text">
                        Hello there! <br />
                        <br />
                        I'm Nico, a {age}-year-old web developer based in Germany. <br />
                        This portfolio is my way of sharing the excitement of my journey with you. <br />
                        Here, I've put together a collection of demo projects that showcase what I've been working on <br />
                        in order to improve my skills. Enjoy!
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Resume;