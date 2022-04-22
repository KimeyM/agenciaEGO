import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/home.jsx';
import File from './components/file/file';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<File />} />
      </Routes>
    </div>
  );
}

export default App;
