import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Pages */}
      <Outlet />
    </div>
  )
}

export default App;
