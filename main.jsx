import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import App from './App';
import './css/styles.css';

// 🔁 Restore path setelah reload dari 404.html
const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
