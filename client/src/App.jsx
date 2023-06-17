import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App;
