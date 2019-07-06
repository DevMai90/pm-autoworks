import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingDisplay from './components/landing-page/LandingDisplay';
import ServicesDisplay from './components/services/ServicesDisplay';
import AboutDisplay from './components/about/AboutDisplay';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingDisplay} />
            <Route exact path="/services" component={ServicesDisplay} />
            <Route exact path="/about" component={AboutDisplay} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
