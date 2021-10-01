import React, { useState } from 'react'
import DataProvider from './context/data/dataProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@material-ui/core';

import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import CreateUserPage from './components/pages/CreateUserPage';
import QRCodeReaderPage from './components/pages/QRCodeReaderPage';
import CreateUserFormsPage from './components/pages/CreateUserFormsPage';
import EvaluationPage from './components/pages/EvaluationPage';
import QRPersonalDataPage from './components/pages/QRPersonalDataPage';

import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif"
  }
})

function App() {

  const [userData,setUserData] = useState({
    personalData: {
      wiek:'',
      waga:'',
      plec:""
    },
    testData: {
      testName: "",
      params: [
        { key: "", value: 0 },
        { key: "", value: 0 },
      ]
    }
  })

  const setupTestData = testData => setUserData({ ...userData, testData: testData })
  const setPersonalData = personalData => setUserData({ ...userData, personalData: personalData })

  return (
    <DataProvider>
      <ThemeProvider theme={ theme }>
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
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
