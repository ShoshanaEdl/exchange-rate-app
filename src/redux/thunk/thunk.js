import axios from "axios"
import 
     getNegativeExchangeRatesAction 
   from '../actions/exchngeRatesActions';

export const getNegativeExchangeRates = () => {
    // fetchTodoByIdThunk is the "thunk function"
    return async function getNegativeExchangeRates(dispatch, getState) {
      //has to be taken from env
      const response = await axios.get(`https://localhost:7013/ExchangRate`)
      dispatch({ type: 'getExchangeRates', payload: response })
    }
  }