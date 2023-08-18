const Projects = () => {

    const baseURL = "https://nitodeco.github.io/"

    const project1 = baseURL + "test";
    const project2 = baseURL + "";
    const project3 = baseURL + "";

    return (
        <div className="projects">
            <div className="titleContainer">
                <h2 id="welcome">Projects</h2>
            </div>
            <div id="project-container">
                <iframe
                    className="project"
                    src={project1}
                    frameBorder={0}
                />
            </div>
        </div>
    );
}
 
export default Projects;