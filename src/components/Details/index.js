import React from "react";
import {InfoConsumer}  from "../App/context";


const Details=()=>{
  return(
    <div className="input-layout">
      <span>Base on 2019 amendment <a href="https://gra.gov.gh/index.php/tax-rates-2019/">GRA</a></span>
      <div>
       <span>Tax table for {"something- "}ghc</span> <br/><br/>
       <table className="tax-table">
       <thead>
        <tr>
        <td>CHARGEABLE INCOME</td>
        <td>{"Rate (%)"}</td>
        <td>{"Tax (ghc)"}</td>
        </tr>
       </thead>
       <tbody>
        <InfoConsumer>
           {(state)=>(
            <Rows list={state.taxSteps} />
           )}
        </InfoConsumer>
       </tbody>
       </table>
      </div>
   </div>);
}
const Rows=(props)=> {
  const {list} = props,
  row = list.map((obj, key)=>(
          <tr key={key}>
          {key===0 ?<td>{`first ${obj.chargeable}`}</td>: <td>{`next ${obj.chargeable}`}</td>}
          <td>{obj.rate}</td>
          <td>{obj.tax}</td>
          </tr>
        ));
  return row;
}

export default Details;
