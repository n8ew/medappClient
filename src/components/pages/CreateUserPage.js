import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ScreenContext from '../../context/screenSize/screenContext'
import Heading from '../createUsersFormsComponents/Heading'

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   pageXs: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   pageMd: {
      padding: 0,
      margin: 0,
      width: '80vw',
      minHeight: '90vh',
      maxHeight: '90vh',
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
      maxHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
   heading: {
      marginTop: 125,
      maxWidth: '60vw'
   },
   btn: {
      marginTop: 50,
      height: 50,
      width: 175,
      fontWeight: 300
   }
})

const CreateUserPage = () => {

   const screenContext = useContext(ScreenContext)
   const { screen } = screenContext

   const history = useHistory()

   const handleClick = () => history.push('/forms')

   const classes = useStyles()

   return (
      <Container className={ screen === 'xs' ? classes.pageXs : (screen === 'sm' ? classes.pageMd : classes.pageLg) }>
        <Heading text='Po kliknięciu dalej wprowadź wymagane informacje' />
        <Button
         variant='contained'
         color='primary'
         className={ classes.btn }
         onClick={ handleClick }
        >Przejdź dalej</Button>
      </Container>
   )
}

export default CreateUserPage
