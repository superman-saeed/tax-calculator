import React from "react";
import {TaxConsumer} from "../Landing";


const Details=()=>{
  return(
    <div className="input-layout">
      <span>Base on 2019 amendment <a href="https://gra.gov.gh/index.php/tax-rates-2019/">GRA</a></span>
      <div>
       <span>Tax table for {"something- "}ghc</span>
       <table className="tax-table">
       <thead>
        <td>CHARGEABLE INCOME</td>
        <td>Rate</td>
        <td>Tax</td>
       </thead>
       <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>4</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>4</td>
        </tr>
       </tbody>

       </table>
      </div>
   </div>);
}

export default Details;
