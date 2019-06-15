import React from "react";
import {Link} from "react-router-dom";
import * as urls from "../../constants/route";

//to display cash field
export const Cash= ({title,hint,onchange,name})=>{
  return(
    <div className="cash-input">
     <div><span className="desc">{title}</span></div>
     <div>
       <span className="sp">GHS</span>
       <input type="number" name={name} onChange={(e)=>onchange(e)} placeholder={hint} />
     </div>
    </div>
  );
}
//to display AnnualChecker calculation
export const AnnualChecker=({checker})=>{
  return(
  <div>
  <label className="container"><span className="desc">Annual tax calculation</span>
  <input onChange={(e)=>checker(e)}type="checkbox" />
  <span className="checkmark"></span>
</label>
 </div>
);
}
//to display tax and ssnit Deduction
export const Deduction=({ssnit,tax, netIncome,linkClick}) =>{
    return(
      <div>
      <div className="deductions">
      <span>SSNIT Deduction {ssnit}ghc</span><br/>
      <span>Tax Deduction {tax}ghc</span>
      <h2 style={{color:"#2196F3"}}>Net Income : <span title="your take home">{netIncome}ghc</span></h2>
      <Link to={urls.INFO}>Details for calculation</Link>
      </div>
      </div>);
}

export const Footer=()=>{
  return(
    <div style={{color:"red", textAlign:"center", marginTop:20}}>
    Made with <span role="img" aria-label="love">&#128151;</span> by <a href="https://superman-saeed.github.io">Saeed</a>
    </div>
  )
}
