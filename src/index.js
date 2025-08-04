// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // ✅ if App.js is in /components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
