import React from 'react'
import { useHistory } from 'react-router-dom'
import Heading from '../createUsersFormsComponents/Heading'

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   page: {
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

   const history = useHistory()

   const handleClick = () => history.push('/forms')

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
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
