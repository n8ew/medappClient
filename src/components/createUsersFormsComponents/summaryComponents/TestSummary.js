import React from 'react'

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   container: {
      padding: 0,
      paddingTop: 40,
      margin: 0,
      borderTop: '2px solid #ddd',
      borderTopLeftRadius: 80,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
   },
   heading: {
      marginBottom: 20
   },
   row: {
      display: 'flex',
      alignItems: 'center',
      width: 300,
      marginBottom: 10
   },
   label: {
      width: 90,
      marginRight: 10
   }
})

const PersonalSummary = ({ data }) => {

   const classes = useStyles()

   return (
      <Container className={ classes.container }>
         <Typography
            variant='h6'
            className={ classes.heading }
         >Test: { data.testName }</Typography>
         { data.params.map((param,index) => (
            <Container className={ classes.row } key={ index }>
               <Typography className={ classes.label }>{ param.key } :</Typography>
               <Typography>{ param.value }</Typography>
            </Container>
         ))}
      </Container>
   )
}

export default PersonalSummary
