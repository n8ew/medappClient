import { SET_LOADING, GET_TESTS_SCHEMAS, GET_TEST_NORMS, GET_TEST } from '../types'

export default (state, action) => {
   switch (action.type) {
      case SET_LOADING:
         return {
            ...state,
            loading: true
         }
      case GET_TESTS_SCHEMAS:
         return {
            ...state,
            testsSchema: action.payload,
            loading: false
         }
      case GET_TEST_NORMS:
         return {
            ...state,
            norms: action.payload,
            loading: false
         }
      case GET_TEST:
         return {
            ...state,
            test: action.payload,
            loading: false
         }
      default:
         return state
   }
}