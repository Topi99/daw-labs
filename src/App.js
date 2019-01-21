import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';
import './App.scss';

const App = () => {
  const [title, setTitle] = useState('Laboratorios');

  document.title = title;
  
  return(
    <Router>
      <>
        <Navigation title={title} />
        <Routes setTitle={setTitle} />
        <Footer />
      </>
    </Router>
  );
}

export default App;