import React from 'react'
import DataProvider from './context/data/dataProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import CreateUserPage from './components/pages/CreateUserPage';
import QRCodeReaderPage from './components/pages/QRCodeReaderPage';
import CreateUserFormsPage from './components/pages/CreateUserFormsPage';

import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/qrreader' component={ QRCodeReaderPage } />
            <Route exact path='/createUser' component={ CreateUserPage } />
            <Route exact path='/forms' component={ CreateUserFormsPage } />
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
