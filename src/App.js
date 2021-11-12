import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import SpeedNumbers from './components/speed-numbers';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speed-numbers" element={<SpeedNumbers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
