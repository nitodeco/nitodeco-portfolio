import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import RedirectToHome from './components/RedirectToHome.js';

import Navigation from './components/Navigation.js';
import './css/Navigation.css';

import Projects from './components/Projects.js';
import './css/Projects.css';

import Resume from './components/Resume.js';
import './css/Resume.css';

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
