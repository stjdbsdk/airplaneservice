import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import './app2.css';
// import './gallery.css';
//import App from './App';
//import App from './event/App';
//import App2 from './event/App2';
//import Gallery from './event/GalleryUpgrade/Gallery';
//import App from './event/interval/App';
//import Wrap from './hook/effect/Wrap';
//import Wrap from './map/Wrap';
//import Wrap from './airplaneservice/Wrap';
import App from './memoService/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
   <App />
   
  //</React.StrictMode>
);

reportWebVitals();
