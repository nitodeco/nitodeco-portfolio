import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import RedirectToHome from './RedirectToHome.js';

import Navigation from './Navigation.js';
import './Navigation.css';

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
          <Route path="/home" element={ <Resume /> } />
          <Route path="/projects" element={ <Projects /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
