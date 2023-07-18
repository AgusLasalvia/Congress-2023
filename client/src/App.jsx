import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './components/Navbar/Navbar';
import Lenis from '@studio-freight/lenis'



function App() {

  // smooth-scroll
  const lenis = new Lenis({ duration: 0.65 })

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

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
