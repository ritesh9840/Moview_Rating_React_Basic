import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componenets/Header';
import Footer from './componenets/Footer';

const contex=React.createContext();
export const CtsConsumer=contex.Consumer
const animals=['snake','animals','lion']

const routing = (
  <React.StrictMode>
    <BrowserRouter>
    <contex.Provider value={{animals:animals}}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      </contex.Provider>
    </BrowserRouter>
  </React.StrictMode>
);


const root=document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(routing);

reportWebVitals();
