import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import Typography from "@material-ui/core/Typography"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   activeLogo: {
      cursor: 'pointer'
   },
   logo: {}
})

const NavBar = () => {

   const [isHomePage, setIsHomePage] = useState()

   const location = useLocation()
   const history = useHistory()

   useEffect(() => {
      if( location.pathname === '/') {
        return setIsHomePage(true)
      }
      return setIsHomePage(false)
   }, [location.pathname])

   const classes = useStyles()

   return (
      <nav>
         <Typography
            className={ isHomePage ? classes.logo : classes.activeLogo }
            onClick={ () => {
               if(!isHomePage) {
                  history.push('/')
               }
            }}
         >
            MeddAppLOGO
         </Typography>
      </nav>
   )
}

export default NavBar
