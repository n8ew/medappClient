import React, { useState } from 'react'

import PersonalForm from '../createUsersFormsComponents/PersonalForm'
import TestForm from '../createUsersFormsComponents/TestForm'
import SummaryForm from '../createUsersFormsComponents/SummaryForm'

import Container from "@material-ui/core/Container"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   page: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      background: '#eee',
      borderTopLeftRadius: 80,
   },
})

const CreateUserFormsPage = () => {

   const [data,setData] = useState({
      personalData: {},
      testData: {}
   })
   const [currentNumber, setCurrentNumber] = useState(0)

   const handleComponents = {
      setPersonalData: data => setData({ ...data, personaldata: data }),
      setTestData: data => setData({ ...data, testData: data }),
      moveForward: () => setCurrentNumber(currentNumber + 1),
      moveBack: () => setCurrentNumber(currentNumber - 1)
   }

   const components = [
   <PersonalForm handeler={ handleComponents }/>,
   <TestForm handeler={ handleComponents } />,
   <SummaryForm handeler={ handleComponents } />
   ]

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
         {components[currentNumber]}
      </Container>
   )
}

export default CreateUserFormsPage
