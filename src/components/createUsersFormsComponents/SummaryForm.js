import React from 'react'

import { useHistory } from 'react-router-dom'

import Heading from './Heading'
import PersonalSummary from './summaryComponents/PersonalSummary'
import TestSummary from './summaryComponents/TestSummary'

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   page: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      borderTopLeftRadius: 80,
      background: '#fff'
   },
   content: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '70vh',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   btns: {
      padding: 0,
      margin: 0,
      marginTop: 10,
      width: '100vw',
      minHeight: '20vh',
      maxHeight: '20vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   btnForward: {
      width: 175,
      height: 50,
      fontWeight: 300,
   },
   btnBack: {
      width: 175,
      height: 50,
      marginRight: 10,
      fontWeight: 300
   },
})

const SummaryFrom = ({ handeler, sendDataToApp }) => {

   const history = useHistory()

   const handleBtn = () => {
      const user = {
         personalData: handeler.personalData,
         testData: handeler.testData
      }
      sendDataToApp(user)
      history.push('/evaluation')
   }

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
         <Container className={ classes.content }>
            <Heading text='Podsumowanie' />
            <PersonalSummary data={ handeler.personalData } />
            <TestSummary data={ handeler.testData } />
         </Container>
         <Container className={ classes.btns }>
            <Button
                  variant='contained'
                  color='primary'
                  className={ classes.btnBack }
                  onClick={ handeler.moveBack }
               >Wstecz</Button>
               <Button
                  variant='contained'
                  color='primary'
                  className={ classes.btnForward }
                  onClick={ handleBtn }
               >Potwierdź</Button>
         </Container>
      </Container>
   )
}

export default SummaryFrom
