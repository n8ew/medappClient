import React, { useContext, useState } from 'react'
import DataContext from '../../context/data/dataContext'

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   holder: {
      display: 'flex',
      padding: 10,
      borderStyle: 'solid',
      borderWidth: '1px',
      marginBottom: 20,
      borderRadius: 10
   },
   textHolder: {
      display: 'flex',
      alignItems: 'center'
   },
   label: {
      marginRight: 20
   }
})

const ParamResult = ({ data }) => {

   const dataContext = useContext(DataContext)
   const { norms } = dataContext

   const name = data.key
   const normForThis = (input) => {
      for (const key in norms ) {
         if(key === input) {
            return norms[key]
         }
      }
   }
   const test = normForThis(name)
   console.log(data.key,test,'test')

   const [borderColor,setBorderColor] = useState('grey')

   

   const classes = useStyles()

   return (
      <Container className={ classes.holder } style={{ borderColor: borderColor }}>
         <Container className={ classes.textHolder }>
            <Typography className={ classes.label }>{ data.key } :</Typography>
            <Typography>{ data.value }</Typography>
         </Container>
         <Button>
            <HelpOutlineIcon/>
         </Button>
      </Container>
   )
}

export default ParamResult
