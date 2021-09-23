import React from 'react'

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   container: {
      padding: 0,
      paddingLeft: 40,
      paddingTop: 40,
      margin: 0,
      marginBottom: 20,
      borderTop: '2px solid #ddd',
      borderTopLeftRadius: 80
   },
   heading: {
      marginBottom: 20
   },
   row: {
      display: 'flex',
      marginBottom: 10
   },
   label: {
      width: 70
   }
})

const PersonalSummary = ({ data }) => {

   const classes = useStyles()

   return (
      <Container className={ classes.container }>
         <Typography
            variant='h6'
            className={ classes.heading }
         >Dane Osobiste :</Typography>
         <Container className={ classes.row }>
            <Typography className={ classes.label }>Wiek :</Typography>
            <Typography>{ data.wiek }</Typography>
         </Container>
         <Container className={ classes.row }>
            <Typography className={ classes.label }>Waga :</Typography>
            <Typography>{ data.waga }</Typography>
         </Container>
         <Container className={ classes.row }>
            <Typography className={ classes.label }>Płeć :</Typography>
            <Typography>{ data.plec }</Typography>
         </Container>
      </Container>
   )
}

export default PersonalSummary
