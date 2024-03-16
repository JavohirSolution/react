import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import App2 from './App2';
import People from './people';
import Provider from './context';
import Salom from './Salom';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Salom />
    </Provider>
  </React.StrictMode>
);
