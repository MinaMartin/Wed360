import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallary/Gallary";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab,faFacebookF,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp,faUser,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container/Container';
 
library.add(fab,faFacebookF,faInstagram,faChevronUp,faUser,faTwitter,faChevronDown);

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <BrowserRouter>
        <div className="App">
          <Container></Container>
          <Services></Services>
        </div>
      </BrowserRouter>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
