import React, { useState, useContext } from 'react'
import ScreenContext from '../../context/screenSize/screenContext'

import PersonalForm from '../createUsersFormsComponents/PersonalForm'
import TestForm from '../createUsersFormsComponents/TestForm'
import SummaryForm from '../createUsersFormsComponents/SummaryForm'

import Container from "@material-ui/core/Container"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   pageXs: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
   },
   pageMd: {
      padding: 0,
      margin: 0,
      width: '80vw',
      minHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
   pageLg: {
      padding: 0,
      margin: 0,
      width: '40vw',
      minHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
})

const CreateUserFormsPage = ({ setAppData }) => {

   const screenContext = useContext(ScreenContext)
   const { screen } = screenContext

   const [data,setData] = useState({
      personalData: {
         wiek: '',
         waga: '',
         plec: ''
      },
      testData: {
         testName: '',
         params: []
      }
   })
   const [currentNumber, setCurrentNumber] = useState(0)

   const handleComponents = {
      personalData : data.personalData,
      testData : data.testData,
      setPersonalData: input => setData({ ...data, personalData: input }),
      setTestData: input => setData({ ...data, testData: input }),
      moveForward: () => setCurrentNumber(currentNumber + 1),
      moveBack: () => setCurrentNumber(currentNumber - 1)
   }

   const components = [
   <PersonalForm handeler={ handleComponents }/>,
   <TestForm handeler={ handleComponents } />,
   <SummaryForm handeler={ handleComponents } sendDataToApp={ setAppData } />
   ]

   const classes = useStyles()

   return (
      <Container className={ screen === 'xs' ? classes.pageXs : (screen === 'sm' ? classes.pageMd : classes.pageLg) }>
         {components[currentNumber]}
      </Container>
   )
}

export default CreateUserFormsPage
