import React from 'react'

import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   heading: {
      marginTop: 75,
      marginBottom: 30,
      fontWeight: 400
   },
})


const Heading = ({ text }) => {

   const classes = useStyles()

   return (
      <Typography
         variant='h5'
         align='center'
         className={ classes.heading }
      >
         { text }
      </Typography>
   )
}

export default Heading
