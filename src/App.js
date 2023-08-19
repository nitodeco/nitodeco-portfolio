import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import RedirectToHome from './RedirectToHome.js';

import Navigation from './Navigation.js';
import './Navigation.css';

import Home from './Home.js';
import './Home.css';

import Projects from './Projects.js';
import './Projects.css';

import Resume from './Resume.js';
import './Resume.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={ <RedirectToHome /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/resume" element={ <Resume /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
