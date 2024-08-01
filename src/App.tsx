import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SideDrawer from './components/pages/SideDrawer';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';



const appVersion = '0.0.4';

const queryClient = new QueryClient();

  const App: React.FC = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1 pt-16">
            <SideDrawer />
            <div className="flex-1 ml-16 mt-4">
              {/* Your main content goes here */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          <Footer appVersion={appVersion} />
        </div>
      </Router>
      </QueryClientProvider>


    );
  };
  
  export default App;