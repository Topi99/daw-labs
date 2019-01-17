import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';
import './App.scss';

const App = () => {
  return(
    <Router>
      <>
        <Navigation />
        <Routes />
        <Footer />        
      </>
    </Router>
  );
}

export default App;