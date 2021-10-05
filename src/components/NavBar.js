import React, { useState, useEffect } from 'react'
import Logo from '../logo/Logo'
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

   useEffect(() => {
      if( location.pathname === '/') {
        return setIsHomePage(true)
      }
      return setIsHomePage(false)
   }, [location.pathname])
   
   const classes = useStyles()



   return (
      <nav>
         <Logo isHomePage={ isHomePage } />
      </nav>
   )
}

export default NavBar
