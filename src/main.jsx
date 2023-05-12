import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import { Gallery, Services, Contact, Navbar, Footer, } from "./components";
import ErrorPage from './components/ErrorPage';
import './index.css';
import styles from "./style";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Router>
          <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <Routes>
              <Route path="/contact" element={<Contact/>} />
              <Route path="/*" element={  <App />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary> 
  </React.StrictMode>
);
