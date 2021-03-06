import React, { useState, useContext } from 'react'
import ScreenContext from '../../context/screenSize/screenContext'

import Heading from './Heading'

import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   pageXs: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      borderTopLeftRadius: 80,
   },
   pageMd: {
      padding: 0,
      margin: 0,
      width: '80vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      borderTopLeftRadius: 80,
   },
   pageLg: {
      padding: 0,
      margin: 0,
      width: '40vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      borderTopLeftRadius: 80,
   },
   content: {
      padding: 0,
      margin: 0,
      width: '100%',
      maxHeight: '70vh',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   input: {
      marginBottom: 20
   },
   btns: {
      padding: 0,
      margin: 0,
      marginTop: 20,
      width: '100%',
      minHeight: '20vh',
      maxHeight: '20vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   btnForward: {
      width: 175,
      height: 50,
      fontWeight: 300
   }
})

const PersonalForm = ({ handeler }) => {

   const screenContext = useContext(ScreenContext)
   const { screen } = screenContext

   const [personalData, setPersonalData] = useState( handeler.personalData )

   const handleChange = e => setPersonalData({ ...personalData, [e.target.name] : e.target.value })

   const handleSubmit = e => {
      e.preventDefault()
      if(personalData.wiek !== '' && personalData.waga !== '' && personalData.plec !== '') {
         handeler.setPersonalData(personalData)
         handeler.moveForward()
      }
   }

   const classes = useStyles()

   return (
      <Container className={ screen === 'xs' ? classes.pageXs : (screen === 'sm' ? classes.pageMd : classes.pageLg) }>
         <Container className={ classes.content }>
            <Heading text='Dane Osobiste' />
            <form className='standardForm' id='personalForm' onSubmit={ handleSubmit }>
               <TextField
                  fullWidth
                  label='Wiek :'
                  name='wiek'
                  className={ classes.input }
                  type='number'
                  inputProps={{ min: 0, step: 1 }}
                  value={ personalData.wiek }
                  onChange={ handleChange }
               />
               <TextField
                  fullWidth
                  label='Waga :'
                  name='waga'
                  className={ classes.input }
                  type='number'
                  inputProps={{ min: 0, step: 1 }}
                  value={ personalData.waga }
                  onChange={ handleChange }
               />
               <FormControl fullWidth>
                  <InputLabel>P??e?? :</InputLabel>
                  <Select
                     name='plec'
                     value={ personalData.plec }
                     onChange={ handleChange }
                  >
                     <MenuItem value='mezczyzna'>M????czyzna</MenuItem>
                     <MenuItem value='kobieta'>Kobieta</MenuItem>
                  </Select>
               </FormControl>
            </form>
         </Container>
         <Container className={ classes.btns }>
            <Button
               variant='contained'
               color='primary'
               type='submit'
               form='personalForm'
               className={ classes.btnForward }
            >Dalej</Button>
         </Container>
      </Container>
   )
}

export default PersonalForm
