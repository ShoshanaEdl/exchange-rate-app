import { createStore } from "redux";
import reducer from "reducers/reducer";

function configureStore(state = { exchangeRates: {} }) {
  return createStore(reducer,state);
}

export default configureStore;