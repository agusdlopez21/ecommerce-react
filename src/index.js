import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAbyYr2jIdq5W3oiAE-lFWbMHYdSfPuv0",
  authDomain: "ecomerce-shoebrand.firebaseapp.com",
  projectId: "ecomerce-shoebrand",
  storageBucket: "ecomerce-shoebrand.appspot.com",
  messagingSenderId: "888482825791",
  appId: "1:888482825791:web:a12f80ecccc27aa7d71a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
