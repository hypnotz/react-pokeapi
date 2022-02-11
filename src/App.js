import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PokeInfo from './components/PokeInfo';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokemon/:name">
          <PokeInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
