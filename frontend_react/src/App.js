import React from 'react';

// eslint-disable-next-line
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

import './App.scss';


const App = () => {
  return (
    <div className="app">
      { /* <Navbar /> */}
      <Navbar />
      <Header />
      <About />
      <Work />
      
      <Skills />
      {/*<Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;