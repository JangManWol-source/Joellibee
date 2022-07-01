import React from 'react';
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Menus from './components/Menus/Menus'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut';
function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={'/checkout/'}>
          <CheckOut />
        </Route>
        <Route path={'/cart'}>
          <Cart />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/menus/:id'}>
          <Menus />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
