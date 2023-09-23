import { useScrollDirection } from "../utils";

const Projects = () => {

    const baseURL = "https://nitodeco.github.io/"

    const project1 = baseURL + "";
    const project2 = baseURL + "";
    const project3 = baseURL + "";

    const scrollDirection = useScrollDirection();

    return (
        <div className="projects">
            <div className={ `titleContainer ${scrollDirection === 'up' ? 'show' : 'hide'}`}>
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
                        title='project1'
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
                        title='project2'
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
                        title='project3'
                        src={project3}
                        frameBorder={0} />
                </div>
            </div>
        </div>
    );
}
 
export default Projects;