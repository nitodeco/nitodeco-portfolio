import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15 && window.scrollY < lastScrollY) {
                setIsVisible(false);
            } else if (window.scrollY > 15 && window.scrollY > lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const pageTitle = useLocation().pathname.substring(1).charAt(0).toUpperCase() + useLocation().pathname.substring(2);

    return (
        <nav className={`navbar shadow`}>
            <div className={`pageHeader ${isVisible ? 'visible' : ''}`}>
                <h1 id="pageTitle">{pageTitle}</h1>
            </div>
            <div className="links shadow">
                <div className="btn"><Link className="navLink" to="/resume">Resume</Link></div>
                <div className="btn"><Link className="navLink" to="/projects">Projects</Link></div>
            </div>
        </nav>
    );
}
 
export default Navigation;