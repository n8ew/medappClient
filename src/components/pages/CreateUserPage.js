import React from 'react'
import { useHistory } from 'react-router-dom'

import Typography from "@material-ui/core/Typography"
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
      background: '#eee',
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
      marginTop: 75,
      height: 50
   }
})

const CreateUserPage = () => {

   const history = useHistory()

   const handleClick = () => history.push('/forms')

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
        <Typography
         className={ classes.heading }
         variant='h5'
         component='h5'
         align='center'
        >
           Coś tam coś tamCoś tam coś tam
        </Typography>
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
