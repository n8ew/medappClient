import React, { useState, useEffect, useContext } from 'react'
import DataProvider from './context/data/dataProvider'
import ScreenContext from './context/screenSize/screenContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createTheme, ThemeProvider, useTheme, useMediaQuery } from '@material-ui/core';

import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import CreateUserPage from './components/pages/CreateUserPage';
import QRCodeReaderPage from './components/pages/QRCodeReaderPage';
import CreateUserFormsPage from './components/pages/CreateUserFormsPage';
import EvaluationPage from './components/pages/EvaluationPage';
import QRPersonalDataPage from './components/pages/QRPersonalDataPage';

import './App.css';

// GIT TEST
const themeDefault = createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif"
  }
})

function App() {

  const screenContext = useContext(ScreenContext)   
  const { screen, setScreenSize } = screenContext

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

  // Screen size stuff for responsivnes
  const themeScreen = useTheme()
  const screenXSmall = useMediaQuery(themeScreen.breakpoints.only('xs'))
  const screenSmall = useMediaQuery(themeScreen.breakpoints.only('sm'))
  const screenMedium = useMediaQuery(themeScreen.breakpoints.only('md'))
  const screenLarge = useMediaQuery(themeScreen.breakpoints.only('lg'))
  const screenXLarge = useMediaQuery(themeScreen.breakpoints.only('xl'))
  useEffect(() => {
    if(screenXSmall) return setScreenSize('xs')
    if(screenSmall) return setScreenSize('sm')
    if(screenMedium) return setScreenSize('md')
    if(screenLarge) return setScreenSize('lg')
    if(screenXLarge) return setScreenSize('xl')
  }, [screenSmall,screenMedium,screenLarge,screenXSmall,screenXLarge])

  return (
    <DataProvider>
      <ThemeProvider theme={ themeDefault }>
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
