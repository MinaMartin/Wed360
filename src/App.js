import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallary/Gallary";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab,faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp,faUser } from '@fortawesome/free-solid-svg-icons';
 
library.add(fab,faFacebookF,faInstagram,faChevronUp,faUser);

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="App">
        <Gallery></Gallery>
        <Services></Services>
      </div>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
