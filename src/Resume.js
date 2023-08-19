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

const Resume = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div className="resume">
            <div className="titleContainer ${scrollDirection === 'up' ? 'show' : 'hide'}">
                <h2 className="title">Resume</h2>
            </div>
            <div className="resume-container">
            </div>
        </div>
    );
}
 
export default Resume;