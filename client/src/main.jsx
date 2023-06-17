import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// css
import './App.css';
import './components/Navbar/Navbar.css';
import './components/HomeCTA/HomeCTA.css';
import './components/Footer/Footer.css';
import './Pages/Home/Home.css';
import './Pages/Registration/Registration.css';
import './Pages/Abstract/Abstract.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
