import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './store';
import { AudiPlatformProvider } from '@audi/audi-ui-react'

ReactDOM.render(
  <React.StrictMode>
    <AudiPlatformProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </AudiPlatformProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
