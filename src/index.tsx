import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

applyPolyfills().then(() => {
  defineCustomElements(window);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

