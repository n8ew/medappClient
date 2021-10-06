import React, { useContext, useState, useEffect } from 'react'
import DataContext from '../../context/data/dataContext'

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Popover from '@material-ui/core/Popover';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   holder: {
      display: 'flex',
      flexDirection: 'column',
      padding: 10,
      borderStyle: 'solid',
      borderWidth: '1px',
      marginBottom: 20,
      borderRadius: 10
   },
   container: {
      display: 'flex',

   },
   textHolder: {
      display: 'flex',
      alignItems: 'center'
   },
   label: {
      marginRight: 20
   },
   resHolder: {
      marginLeft: 17,
   },
   resTxt: {
      fontWeight: '300',
      fontStyle: 'italic',
      color: '#333'
   },
   popupHolder: {
      background: "#FFF9B2",
      padding: 20,
      border: '1px solid #aaa'
   },
   popupHeading: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10
   }
})

const ParamResult = ({ data, show }) => {

   const dataContext = useContext(DataContext)
   const { norms } = dataContext

   const [norm,setNorm] = useState('')

   useEffect(() => {
      const name = data.key
      for(let key in norms ) {
         if(key === name) {
            setNorm(norms[key])
         }
      }
   },[norms])
   
   const [color,setColor] = useState({
      border: 'grey',
      background: 'inherit'
   })

   // Recomendation msg
   const [msg,setMsg] = useState('')

   useEffect(() => {
      if(norm.normMax < data.value ) {
         setColor({ border: 'red', background: 'rgba(255,0,0,.1)'})
         setMsg('Żeby obniżyć wynik rekomendujemy ' + norm.toHighMed)
      } else if (norm.normMin > data.value) {
         setColor({ border: 'blue', background: 'rgba(0,0,255,0.1)'})
         setMsg('Żeby podnieść wynik rekomendujemy ' + norm.toLowMed)
      } else {
         setColor({ border: 'green', background: 'rgba(0,255,0,.1'})
         setMsg('Twój wynik jest w normie')
      }
   },[norm])

   // popup
   const [anchorEle,setAnchorElement] = useState(null)
   const handleBtn = e => setAnchorElement(e.currentTarget)
   const handleClose = () => setAnchorElement(null)
   const open = Boolean(anchorEle)

   const classes = useStyles()

   return (
      <Container className={ classes.holder } style={{ borderColor: color.border, background: color.background }}>
         <Container className={ classes.container }>
            <Container className={ classes.textHolder }>
               <Typography className={ classes.label }>{ data.key }:</Typography>
               <Typography>{ data.value }</Typography>
            </Container>
            <Button
               onClick={ handleBtn }
            >
               <HelpOutlineIcon/>
            </Button>
         </Container>
         {show && (
            <Container className={ classes.resHolder }>
               { msg !== '' && <Typography className={ classes.resTxt }>{ msg }</Typography>}
            </Container>
         )}
         <Popover
            open={ open }
            anchorEl={ anchorEle }
            onClose={ handleClose }
            anchorOrigin={{
               vertical: 'top ',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
         >
            <Container className={ classes.popupHolder } onClick={ handleClose }>
               <Typography className={ classes.popupHeading }>Normy dla { data.key } wynoszą : </Typography>
               <Typography className={ classes.popuptext }> Min: { norm.normMin } - Max: { norm.normMax }</Typography>
            </Container>
         </Popover>
      </Container>
   )
}

export default ParamResult
