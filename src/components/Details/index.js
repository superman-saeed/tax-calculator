import React from "react";
import {InfoConsumer}  from "../App/context";


const Details=()=>{
  return(
    <InfoConsumer>
       {(state)=>(
    <div className="input-layout">
      <span>Base on 2019 amendment <a href="https://gra.gov.gh/index.php/tax-rates-2019/">GRA</a></span>
      <div>

       <span>Tax Table For {state.grossInput}ghc</span> <br/>
       <span>SSNIT Deduction :{state.ssnitDeduction}ghc </span><br/>
       <span>Allowance :{state.allowanceInput}ghc</span>
       <br/><br/>
       <table className="tax-table">
       <thead>
        <tr>
        <td>CHARGEABLE INCOME</td>
        <td>{"Rate (%)"}</td>
        <td>{"Tax (ghc)"}</td>
        </tr>
       </thead>
       <tbody>

        <Rows list={state.taxSteps} />
        <tr>
        <td colSpan="2">Total Tax Deduction</td>
        <td>{ state.taxDeduction }</td>
        </tr>
       </tbody>
       </table>

      </div>
   </div>
 )}
</InfoConsumer>);
}
const Rows=(props)=> {
  const {list} = props,
  row = list.map((obj, key)=>(
          <tr key={key}>
          {key===0 && list.length === key ?<td>{`first ${obj.chargeable}`}</td>: <td>{`next ${obj.chargeable}`}</td>}
          <td>{obj.rate}</td>
          <td>{obj.tax}</td>
          </tr>

        ));
  console.log(list.length);
  return row;
}

export default Details;
