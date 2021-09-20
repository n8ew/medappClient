import React, { useReducer } from 'react'
import axios from 'axios'
import DataContext from './dataContext'
import DataReducer from './dataReducer'
import { SET_LOADING, GET_TESTS_SCHEMAS } from '../types'

const DataProvider = props => {

   const initialState = {
      loading: false,
      testsSchema: []
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


   return (
      <DataContext.Provider value={{ 
         testsSchema: state.testsSchema,
         getSchemas
      }}>
         { props.children }
      </DataContext.Provider>
   )
}

export default DataProvider
