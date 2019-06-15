import React,{createContext} from "react";
import Details from "../Details";
import {Cash, AnnualChecker, Deduction} from "./partials";
import computeTax from "../../lib/tax-calculator.js";


const initialiseState={
   grossInput:0,
   allowanceInput:0,
   annualChecker:false,
   taxDeduction:0,
   ssnitDeduction:0,
   netIncome:0,
   yearCal:false
}
const TaxContext = createContext(initialiseState);

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = initialiseState;
  }

  cashChange=({target})=>{
    const { name, value } = target;
    const {grossInput,allowanceInput}= this.state;
    const val = Number(value);
    const taxcal = name==="grossInput" ?
     computeTax(val, allowanceInput)
     :computeTax(grossInput, val);

    this.setState({
      [name]:val,
      ...taxcal
    });

   console.table(this.state);

  }

  annualCheck=({target})=>{
     this.setState({yearCal:target.checked})
  }
  // to render app
  render(){

    const {
      taxDeduction,
      ssnitDeduction,
      netIncome } = this.state;

    return(
      <TaxContext.Provider value={this.state}>
      <div className="input-layout">
        <h3>Tax calculator</h3>
        <div className="cal">
        <Cash
        onchange={this.cashChange}
        title="PAYE Gross Income* "
        name="grossInput"
        hint="cash income" />

        <Cash
        onchange={this.cashChange}
        title="Allowance"
        name="allowanceInput"
        hint="cash,rent,fuel"
        />
        </div>
        <AnnualChecker checker={this.annualCheck}/>

        <Deduction
        tax={taxDeduction}
        ssnit={ssnitDeduction}
        netIncome ={netIncome}
         />


      </div>
      </TaxContext.Provider>
    );
  }
}

export default Calculator;
export const TaxConsumer = TaxContext.Consumer;
