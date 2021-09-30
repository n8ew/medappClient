import React, { useContext, useState, useEffect } from 'react'
import DataContext from '../../context/data/dataContext'
import Heading from '../createUsersFormsComponents/Heading'
import ScanResponse from '../QrCodeComponents/ScanResponse'

import QrReader from 'react-qr-scanner'
import ClipLoader from "react-spinners/ClipLoader"
import { useHistory } from 'react-router-dom'

import Container from "@material-ui/core/Container"

import { makeStyles } from '@material-ui/core'

const QRCodeReaderPage = ({ setupTestData }) => {

   const history = useHistory()

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
         const scanRes = data.text
         setScan(scanRes)
         setLoading(true)
         getTest(scanRes)
      }
   }

   const [success,setSuccess] = useState(false)

   useEffect(() => {
      if(test.msg === 'success') {
         const testRes = {
            testName: test.doc.testName,
            params: test.doc.params
         }
         setupTestData(testRes)
         return setSuccess(true)
      } else {
         return setSuccess(false)
      }
   }, [test])

   let responseHendeler
   if(success) {
      responseHendeler = {
         txt: 'Skan zakonczony powodzeniem',
         btnColor: 'primary',
         btnTxt: 'przejdz dalej',
         action: () => history.push('/qrPersonalData')
      }
   } else {
      responseHendeler = {
         txt: 'Skan nie powiodl sie',
         btnColor: 'secondary',
         btnTxt: 'sprobuj ponownie',
         action: () => setScan('')
      }
   }

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
         <Container className={ classes.content }>
            <Heading text='Zeskanuj swoj kod QR' />
            { scan === '' && <QrReader
            delay='300'
            style={{ width: '80%'}}
            onError={handleQRError}
            onScan={handleQRScan}
            /> }
         </Container>
         <Container className={ classes.scanResHolder }>
            { loading && <ClipLoader loading={loading} color={'blue'} size={45} /> }
            { scan !== '' && !loading && (<ScanResponse handeler={ responseHendeler } />)}
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
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   scanResHolder: {
      padding: 0,
      margin: 0,
      marginTop: 50,
      width: '100vw',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
   },
})

export default QRCodeReaderPage
