import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// page imports
import Home from './Pages/Home/Home.jsx';
import './Pages/Home/Home.css';
import About from './Pages/About/About.jsx';
import './Pages/About/About.css';

// component imports
import './components/Navbar/Navbar.css';
import './components/HomeCTA/HomeCTA.css';
import './components/Footer/Footer.css';
import ErrorElement from './Pages/ErrorElement.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/quitel/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/quitel/about" element={<About />} />
    <Route path="*" element={<ErrorElement />} />
    {/* 
    <Route path="/portfolio/about" element={<About />} />
     
    */}
  </Route>
)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
