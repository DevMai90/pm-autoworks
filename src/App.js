import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LandingDisplay from './components/landing-page/LandingDisplay';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingDisplay} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
