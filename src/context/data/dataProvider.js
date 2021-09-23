import React, { useReducer } from 'react'
import axios from 'axios'
import DataContext from './dataContext'
import DataReducer from './dataReducer'
import { SET_LOADING, GET_TESTS_SCHEMAS, GET_TEST_NORMS } from '../types'

const DataProvider = props => {

   const initialState = {
      loading: false,
      testsSchema: [],
      norms: {}
   }

   const [state,dispatch] = useReducer(DataReducer, initialState)

   // FUNCTIONS
   // set loading
   const setLoading = () => dispatch({ type: SET_LOADING })
   // get tests schemas
   const getSchemas = async () => {
      setLoading()
      const res = await axios.get('/api/v1/testsSchema')
      dispatch({
         type: GET_TESTS_SCHEMAS,
         payload: res.data.tests
      })
   }
   const getNormsForTest = async(data) => {
      setLoading()
      const testName = data.testData.testName
      const res = await axios.get(`/api/v1/norms/${testName}`)

      // set wiek
      const wiekInput = data.personalData.wiek
      const checkAge = age => {
         if(age <= 18 ) {
            return 'young'
         } else if (age > 18 && age < 45) {
            return 'adult'
         } else {
            return 'old'
         }
      }
      const wiekOutput = checkAge(wiekInput)
      
      // set plec
      const plecInput = data.personalData.plec
      const checkGender = gender => {
         if( gender === 'kobieta') {
            return 'f'
         } else {
            return 'm'
         }
      }
      const plecOutput = checkGender(plecInput)

      const inputData = res.data.norms
      const dispatchData = inputData => {
         let myNorm;
         for(const key in inputData) {
            if(key === plecOutput) {
               for(const i in inputData[key]) {
                  if(i === wiekOutput) {
                     myNorm = inputData[key][i] 
                  }
               }
            }
         }
         return myNorm
      }

      dispatch({
         type: GET_TEST_NORMS,
         payload: dispatchData(inputData)
      })
   }


   return (
      <DataContext.Provider value={{ 
         testsSchema: state.testsSchema,
         norms: state.norms,
         getSchemas,
         getNormsForTest
      }}>
         { props.children }
      </DataContext.Provider>
   )
}

export default DataProvider
