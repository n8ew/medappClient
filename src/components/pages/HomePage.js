import React from 'react'
import { useHistory } from 'react-router-dom'
import Heading from '../createUsersFormsComponents/Heading'

import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   homePage: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80
   },
   heading: {
      padding: 0,
      paddingTop: 40,
      margin: 0,
      width: '100vw',
      minHeight: '20vh',
      maxHeight: '20vh',
      display: 'flex',
      justifyContent: 'center',
   },
   content: {
      padding: 0,
      paddingTop: 125,
      margin: 0,
      width: '100vw',
      minHeight: '70vh',
      maxHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   btn: {
      width: 175,
      height: 50,
      fontWeight: 300,
      marginBottom: 20
   }
})

const HomePage = () => {

   const history = useHistory()

   const classes = useStyles()

   return (
      <Container className={ classes.homePage }>
         <Container className={ classes.heading }>
            <Heading text='Czy posiadasz kod QR?' />
         </Container>
         <Container className={ classes.content }>
            <Button
               className={ classes.btn }
               variant='contained'
               color='primary'
               onClick={ () => history.push('/qrreader') }
            >Tak</Button>
            <Button
               className={ classes.btn }
               variant='contained'
               color='primary'
               onClick={ () => history.push('/createUser') }
            >Nie</Button>
         </Container>
      </Container>
   )
}

export default HomePage
