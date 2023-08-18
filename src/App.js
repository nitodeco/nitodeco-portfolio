import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import './Home.css';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
