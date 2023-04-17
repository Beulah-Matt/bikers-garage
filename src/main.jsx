import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import ErrorPage from './components/ErrorPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);
