import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const offerCount = 10;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offerCount={offerCount} />
  </React.StrictMode>,
);
