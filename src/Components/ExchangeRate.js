
export const ExchangeRate = props => {
    return (
        <div style={{"margin-bottom" : "10px", "backgroundColor" : "beige"}}>
          <div>
         <label>CurrentChange: </label>
         <label>{props.item.currentChange}</label>
         </div>
         <div>
         <label>CurrentExchangeRate: </label>
         <label>{props.item.currentExchangeRate}</label>
         </div> 
         <div>
         <label>Key: </label>
         <label>{props.item.key}</label>
         </div>
          <div>
         <label>LastUpdate: </label>
         <label>{props.item.lastUpdate}</label>
         </div> <div>
         <label>Unit: </label>
         <label>{props.item.unit}</label>
         </div>
        </div>
      )
}