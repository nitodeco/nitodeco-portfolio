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
        <Home />
      </div>
    </div>
  );
}

export default App;
