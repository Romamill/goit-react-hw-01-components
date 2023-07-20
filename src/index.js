import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const h1 = React.createElement("h1", {children: "Pisun"})
console.log(h1)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {h1}
    <App />
  </React.StrictMode>
);
