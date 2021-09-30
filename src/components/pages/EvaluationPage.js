import React, { useEffect, useContext, useState } from 'react'
import DataContext from '../../context/data/dataContext'

import Heading from '../createUsersFormsComponents/Heading'
import ParamResult from '../evaluationComponents/ParamResult'
import ClipLoader from "react-spinners/ClipLoader"

import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   page: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '90vh',
      borderTopLeftRadius: 80,
      background: "#eee"
   },
   loadingHolder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   loaderHolder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50
   },
   content: {
      padding: 0,
      margin: 0,
      width: '100vw',
      minHeight: '70vh',
      borderTopLeftRadius: 80,
      display: 'flex',
      flexDirection: 'column',
   },
   testLabel: {
      marginLeft: 20,
      marginBottom: 30
   },
   paramsHolder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
   },
   btnHolder: {
      minHeight: '20vh',
      maxHeight: "20vh",
      display: 'flex',
      justifyContent: 'center'
   },
   btn: {
      height: 75
   },
   recomendationsHolder: {
      paddingBottom: 30
   },
   recomendationsHeader: {
      marginBottom: 20
   },
   rekomendation: {
      marginBottom: 15,
      textDecoration: 'underline'
   }
})

const EvaluationPage = ({ userData }) => {

   const dataContext = useContext(DataContext)
   const { norms, getNormsForTest } = dataContext

   const [loading,setLoading] = useState(true)

   useEffect(() => {
      getNormsForTest(userData)
      setTimeout(() => setLoading(false), 2000)
   }, [])

   const [showRec,setShowRec] = useState(false)

   const classes = useStyles()

   return (
      <Container className={ classes.page }>
         { loading ? (
            <Container className={ classes.loadingHolder }>
               <Heading text='Prosze czekac'/>
               <Container className={ classes.loaderHolder  }>
                  <ClipLoader loading={loading} color={'blue'} size={65} />
               </Container>
            </Container>
         ) : (
            <Container className={ classes.content }>
               <Container className={ classes.content }>
                  <Heading text="Wyniki" />
                  <Typography
                     variant='h6'
                     component='h6'
                     className={ classes.testLabel }
                  >
                     { userData.testData.testName } :
                  </Typography>
                  <Container className={ classes.paramsHolder }>
                     { userData.testData.params.map((param,index) => {
                        return (<ParamResult data={ param } show={ showRec } key={ index } />)
                     }) }
                  </Container>
               </Container>
               <Container className={ classes.btnHolder }>
                  <Button 
                     variant='contained'
                     color='primary'
                     className={ classes.btn }
                     onClick={ () => setShowRec(!showRec) }
                  >
                     Zobacz rekomendacje
                  </Button>
               </Container>
            </Container>
         )}
      </Container>
   )
}

export default EvaluationPage
