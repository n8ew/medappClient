import React, { useContext, useState, useEffect } from 'react'
import DataContext from '../../context/data/dataContext'
import ScreenContext from '../../context/screenSize/screenContext'
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

   const screenContext = useContext(ScreenContext)
   const { screen } = screenContext

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
         txt: 'Skan zakonczońy powodzeniem',
         btnColor: 'primary',
         btnTxt: 'przejdź dalej',
         action: () => history.push('/qrPersonalData')
      }
   } else {
      responseHendeler = {
         txt: 'Skan nie powiodł się',
         btnColor: 'secondary',
         btnTxt: 'spróbuj ponownie',
         action: () => setScan('')
      }
   }

   const classes = useStyles()

   return (
      <Container className={ screen === 'xs' ? classes.pageXs : (screen === 'sm' ? classes.pageMd : classes.pageLg) }>
         <Container className={ classes.content }>
            <Heading text='Zeskanuj swoj kod QR' />
            { scan === '' && <QrReader
            delay='300'
            style={{ width: '300px', marginTop: '50px' }}
            onError={handleQRError}
            onScan={handleQRScan}
            /> }
         </Container>
         <Container className={ classes.scanResHolder }>
            { loading && <ClipLoader loading={loading} color={'blue'} size={60} /> }
            { scan !== '' && !loading && (<ScanResponse handeler={ responseHendeler } />)}
         </Container>
      </Container>
   )
}

const useStyles = makeStyles({
   pageXs: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
   },
   pageMd: {
      padding: 0,
      margin: 0,
      width: '80vw',
      minHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
   pageLg: {
      padding: 0,
      margin: 0,
      width: '40vw',
      minHeight: '90vh',
      background: '#fff',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: "4px 4px 8px rgba(0,0,0,.3), -4px -4px 8px rgba(0,0,0,.3) "
   },
   content: {
      padding: 0,
      margin: 0,
      width: '100%',
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
