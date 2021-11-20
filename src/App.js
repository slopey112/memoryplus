import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import SpeedNumbers from './components/speed-numbers';
import NamesAndFaces from './components/names-and-faces';
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
            <Route path="/names-and-faces" element={<NamesAndFaces />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
