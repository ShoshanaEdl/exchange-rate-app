// eslint-disable-next-line import/no-anonymous-default-export
import {getNegativeExchangeRates} from "../logic"
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {} , action) => {
    switch (action.type) {
      case "getExchangeRates":
        return {
          ...state,
          exchangeRates: getNegativeExchangeRates(action.payload?.data)
        };
      default:
        return state;
    }
  };