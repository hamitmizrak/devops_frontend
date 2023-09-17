import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// index.css
import './index.css';

// Blog Router
import BlogRouter from './BlogRouter';

// ROUTER-DOM
import { BrowserRouter } from 'react-router-dom';

// Language
import './internationalization/i18nlanguage'

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));

// RENDER
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogRouter />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
