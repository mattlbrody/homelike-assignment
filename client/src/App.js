import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './views/Header';
import HomeView from './views/HomeView';
import ApartmentView from './views/ApartmentView';
import LocationsView from './views/LocationsView';
import SearchPageView from './views/SearchPageView';

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={HomeView}/>
              <Route exact path="/apartments/:apartmentId" component={ApartmentView}/>
              <Route exact path="/locations" component={LocationsView}/>
              <Route exact path="/search" component={SearchPageView}/>
            </div>
          </Router>
    );
  }
}

export default App;
