import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './globals.css';
import { LoaderProvider } from '@/context/loader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </React.StrictMode>
);
