import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import 
    { getNegativeExchangeRates }
   from '../redux/thunk/thunk';
import { ExchangeRate } from './ExchangeRate'


const ExchangeRates = props => {
  

    useEffect(() => {
        props.dispatch(getNegativeExchangeRates());
    }, [])
  
    return (
    <div>
      {
      props?.exchangeRates?.map((exchangeRate) => {        
        return (<ExchangeRate key={exchangeRate.key} item={exchangeRate} />) 
     })
    }     
    </div>
  )
}
const mapStateToProps = state => ({
    exchangeRates: state.exchangeRates
  });

  const mapDispatchToProps = dispatch => ({
    getNegativeExchangeRates: bindActionCreators(getNegativeExchangeRates, dispatch),
    dispatch
  });

export default connect( mapStateToProps,    mapDispatchToProps)(ExchangeRates)
