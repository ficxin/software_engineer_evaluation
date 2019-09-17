import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Search from './components/Search';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
