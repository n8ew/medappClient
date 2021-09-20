import { SET_LOADING, GET_TESTS_SCHEMAS } from '../types'

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
      default:
         return state
   }
}