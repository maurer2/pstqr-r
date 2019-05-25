import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from 'pages/Home';
import Entry from 'pages/Entry';
import Barcode from 'pages/Barcode';

import './App.css';

const App: React.FunctionComponent = () => (
  <Router>
    <div className="app">
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/entry">Entry</Link>
        <Link to="/barcode">Barcode</Link>
      </header>
      <main className="main">
        <Route exact path="/" component={Home} />
        <Route path="/entry" component={Entry} />
        <Route path="/barcode" component={Barcode} />
      </main>
    </div>
  </Router>
);

export default App;
