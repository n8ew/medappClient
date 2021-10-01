import React, { useContext } from 'react'
import ScreenContext from '../../context/screenSize/screenContext'
import { useHistory } from 'react-router-dom'
import Heading from '../createUsersFormsComponents/Heading'

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   homePageXs: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80
   },
   homePageMd: {
      padding: 0,
      margin: 0,
      width: '80vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
   homePageLg: {
      padding: 0,
      margin: 0,
      width: '40vw',
      minHeight: '90vh',
      maxHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
   heading: {
      padding: 0,
      paddingTop: 40,
      margin: 0,
      width: '100%',
      minHeight: '20vh',
      maxHeight: '20vh',
      display: 'flex',
      justifyContent: 'center',
   },
   content: {
      padding: 0,
      paddingTop: 125,
      margin: 0,
      width: '100%',
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

   const screenContext = useContext(ScreenContext)
   const { screen } = screenContext

   const history = useHistory()

   const classes = useStyles()

   return (
      <Container className={ screen === 'xs' ? classes.homePageXs : (screen === 'sm' ? classes.homePageMd : classes.homePageLg) }>
         <Container className={ classes.heading }>
            <Heading text='Czy posiadasz kod QR ?' />
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
