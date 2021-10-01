import React, { useState } from 'react'
import DataProvider from './context/data/dataProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import CreateUserPage from './components/pages/CreateUserPage';
import QRCodeReaderPage from './components/pages/QRCodeReaderPage';
import CreateUserFormsPage from './components/pages/CreateUserFormsPage';
import EvaluationPage from './components/pages/EvaluationPage';
import QRPersonalDataPage from './components/pages/QRPersonalDataPage';

import './App.css';

function App() {

  // THIS IS TEST

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

  const setupTestData = testData => setUserData({ ...userData, testData: testData })
  const setPersonalData = personalData => setUserData({ ...userData, personalData: personalData })

  return (
    <DataProvider>
      <div className="App">
        <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/qrreader' render={() => <QRCodeReaderPage setupTestData={ setupTestData } />} />
            <Route path='/qrPersonalData' render={() => <QRPersonalDataPage personalData={ userData.personalData } setPersonalData={ setPersonalData } /> } />
            <Route path='/createUser' component={ CreateUserPage } />
            <Route path='/forms' render={() => <CreateUserFormsPage setAppData={setUserData} />} />
            <Route path='/evaluation' render={ () =>  <EvaluationPage userData={ userData } /> } />
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
