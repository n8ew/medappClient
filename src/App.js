import React, { useState } from 'react'
import DataProvider from './context/data/dataProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import CreateUserPage from './components/pages/CreateUserPage';
import QRCodeReaderPage from './components/pages/QRCodeReaderPage';
import CreateUserFormsPage from './components/pages/CreateUserFormsPage';
import EvaluationPage from './components/pages/EvaluationPage';

import './App.css';

function App() {

  const [userData,setUserData] = useState({
    personalData: {
      wiek:2,
      waga:1,
      plec:"mezczyzna"
    },
    testData: {
      testName: "test3",
      params: [
        { key: "param8", value: 0 },
        { key: "param9", value: 0 },
      ]
    }
  })

  return (
    <DataProvider>
      <div className="App">
        <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/qrreader' component={ QRCodeReaderPage } />
            <Route exact path='/createUser' component={ CreateUserPage } />
            <Route exact path='/forms' render={() => <CreateUserFormsPage setAppData={setUserData} />} />
            <Route exact path='/evaluation' render={ () =>  <EvaluationPage userData={ userData } /> } />
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
