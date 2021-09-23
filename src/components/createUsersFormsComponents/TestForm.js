import React, { useEffect, useContext, useState } from 'react'
import DataContext from '../../context/data/dataContext'

import Heading from './Heading'

import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   page: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      borderTopLeftRadius: 80,
   },
   content: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '70vh',
      maxHeight: '70vh',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   btns: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '20vh',
      maxHeight: '20vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   select: {
      marginBottom: 20
   },
   inputRow: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
   },
   label: {
      marginRight: 25
   },
   btnBack: {
      width: 125,
      height: 50,
      marginRight: 25
   },
   btnForward: {
      width: 125,
      height: 50
   }
})

const TestForm = ({ handeler }) => {

   const dataContext = useContext(DataContext)
   const { getSchemas, testsSchema } = dataContext

   
   const [testData,setTestData] = useState(handeler.testData)
   const [selectController,setSelectController] = useState(false)

   useEffect(() => {
      getSchemas()
   }, [])

   const getPickedParams = () => testsSchema.filter(schema => schema.testName === testData.testName)[0].params

   useEffect(() => {
      if(testData.testName !== '' && selectController) {
         setTestData({ ...testData, params: getPickedParams() })
         setSelectController(false)
      }
   }, [testData.testName])

   const handleParamChange = e => {
      const arr = testData.params
      const changedArrr = arr.map(element => {
         if(element.key === e.target.name) {
            return element = { key: e.target.name, value: e.target.value}
         }
         return element
      })
      setTestData({ ...testData,params:changedArrr})
   }

   const handleSubmit = e => {
      e.preventDefault()
      if( testData.testName !== '') {
         handeler.setTestData(testData)
         handeler.moveForward()
      }
   }
   const handleSelectChange = e => {
      setTestData({ ...testData, testName : e.target.value })
      setSelectController(true)
   }

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
         <Container className={ classes.content }>
            <Heading text='Dane Testow' />
            <form
               className='standardForm'
               id='testForm'
               onSubmit={ handleSubmit }   
            >
               <FormControl fullWidth className={ classes.select }>
                  <InputLabel>Wybierz rodzaj testu :</InputLabel>
                  <Select
                     name='testName'
                     value={ testData.testName }
                     onChange={ handleSelectChange }
                  >
                     {testsSchema.map((schema,index) => (
                        <MenuItem
                           key={ index }
                           value={ schema.testName }
                        >{ schema.testName }</MenuItem>
                     ))}
                  </Select>
               </FormControl>
               { testData.params.length > 0 && testData.params.map((param,index) => (
                  <FormControl key={ index } className={ classes.inputRow } fullWidth>
                     <Typography
                        varaint='h6'
                        className={ classes.label }
                     >{ param.key }</Typography>
                     <TextField
                        name={param.key}
                        key={index}
                        type='number'
                        inputProps={{ step:'0.01' }}
                        value={testData.params[index].value}
                        onChange={ handleParamChange }
                     />
                  </FormControl>
               ))}
            </form>
         </Container>
         <Container className={ classes.btns}>
            <Button
               variant='contained'
               color='primary'
               className={ classes.btnBack }
               onClick={ handeler.moveBack }
            >Wstecz</Button>
            <Button
               variant='contained'
               color='primary'
               type='sumbit'
               form='testForm'
               className={ classes.btnForward }
            >Dalej</Button>
         </Container>
      </Container>
   )
}

export default TestForm
 