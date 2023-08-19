import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation.js';
import Home from './Home.js';
import './Home.css';
import './Projects.css';
import Projects from './Projects.js';
import Resume from './Resume.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/resume" element={ <Resume /> } />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
