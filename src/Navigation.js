import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar shadow">
            <h1>Nico Moehn</h1>
            <div className="links">
                <div className="btn"><Link className="navLink" to="/">Home</Link></div>
                <div className="btn"><Link className="navLink" to="/projects">Projects</Link></div>
                <div className="btn"><Link className="navLink" to="/resume">Resume</Link></div>
            </div>
        </nav>
    );
}
 
export default Navigation;