export const getNegativeExchangeRates = (exchangeRates) => {
    const filterdExchangeRates = exchangeRates?.filter(x=> Math.sign(x.currentChange) === -1);
    return filterdExchangeRates;
}