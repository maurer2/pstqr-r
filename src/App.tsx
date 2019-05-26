import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import Entry from 'pages/Entry';
import Barcode from 'pages/Barcode';

import styles from './app.module.css';
import './global.css';

const App: React.FunctionComponent = () => (
  <Router>
    <div className={ styles.wrapper }>
      <header className={ styles.header }>
        <h1 className={ styles['header-title'] }>
          PSTQR
        </h1>
      </header>
      <nav className={ styles.nav }>
        <Link className={ styles['nav-link'] } to="/">Home</Link>
        <Link className={ styles['nav-link'] } to="/entry">Entry</Link>
        <Link className={ styles['nav-link'] } to="/barcode">Home</Link>
      </nav>
      <main className={ styles.main }>
        <Route exact path="/" component={Home} />
        <Route path="/entry" component={Entry} />
        <Route path="/barcode" component={Barcode} />
      </main>
      <footer className={ styles.footer }>
        Footer
      </footer>
    </div>
  </Router>
);

export default App;
