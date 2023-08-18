import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <h1>Portfolio</h1>
      </div>
    </div>
  );
}

export default App;
