import React, { useContext, useState, useEffect } from 'react'
import DataContext from '../../context/data/dataContext'
import Heading from '../createUsersFormsComponents/Heading'

import QrReader from 'react-qr-scanner'
import ClipLoader from "react-spinners/ClipLoader"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from '@material-ui/core'

const QRCodeReaderPage = () => {

   const dataContext = useContext(DataContext)
   const { getTest, test } = dataContext

   // Spinner stuff
   const [loading,setLoading] = useState(false)
   useEffect(() => {
      if(loading) {
         setTimeout(() => setLoading(false), 2000)
      }
   }, [loading])

   const [scan,setScan] = useState('')

   // QR scaner functionality
   const handleQRError = error => console.log(error)
   const handleQRScan = data => {
      if(data) {
         setScan(data.text)
         setLoading(true)
      }
   }


   useEffect(() => console.log(test), [test])

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
         <Container className={ classes.content }>
            <Heading text='Zeskanuj swoj kod QR' />
            <QrReader
               delay='300'
               style={{ width: '80%'}}
               onError={handleQRError}
               onScan={handleQRScan}
               />
            { loading && (
               <ClipLoader loading={loading} size={35} />
            )}
            {scan !== '' && (<Typography>{scan}</Typography>)}
         </Container>
      </Container>
   )
}

const useStyles = makeStyles({
   page: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      borderTopLeftRadius: 80,
      background: "#eee"
   },
   content: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '70vh',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
})

export default QRCodeReaderPage
