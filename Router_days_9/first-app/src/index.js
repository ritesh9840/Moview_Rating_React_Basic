import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

const routing = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();
