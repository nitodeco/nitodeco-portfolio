import { useState, useEffect } from 'react';

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

const Projects = () => {

    const baseURL = "https://nitodeco.github.io/"

    const project1 = baseURL + "";
    const project2 = baseURL + "";
    const project3 = baseURL + "";

    

    return (
        <div className="projects">
            <div className="titleContainer ${scrollDirection === 'up' ? 'show' : 'hide'}">
                <h2 className="title">Projects</h2>
            </div>
            <div id="project-container">
                <div className="showcase">
                    <h1 className="showcase-title">Project 1</h1>
                    <p className="showcase-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime similique vel asperiores aperiam doloribus nam cumque reprehenderit blanditiis quis sit quibusdam modi incidunt minima natus, et sint dolorum itaque nobis.
                    </p>
                    <iframe
                    className="project"
                    src={project1}
                    frameBorder={0} />
                </div>
                <div className="showcase">
                    <h1 className="showcase-title">Project 2</h1>
                    <p className="showcase-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime similique vel asperiores aperiam doloribus nam cumque reprehenderit blanditiis quis sit quibusdam modi incidunt minima natus, et sint dolorum itaque nobis.
                    </p>
                    <iframe
                    className="project"
                    src={project2}
                    frameBorder={0} />
                </div>
                <div className="showcase">
                    <h1 className="showcase-title">Project 3</h1>
                    <p className="showcase-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime similique vel asperiores aperiam doloribus nam cumque reprehenderit blanditiis quis sit quibusdam modi incidunt minima natus, et sint dolorum itaque nobis.
                    </p>
                    <iframe
                    className="project"
                    src={project3}
                    frameBorder={0} />
                </div>
            </div>
        </div>
    );
}
 
export default Projects;