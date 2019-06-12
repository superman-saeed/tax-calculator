import React from "react";
import Details from "../Details";
import {Cash, AnnualChecker, Deduction} from "./partials";



const initialiseState={
   grossInput:0,
   allowanceInput:0,
   annualChecker:false,
   taxDeduction:0,
   ssnitDeduction:0,
   netIncome:0,
   yearCal:false
}
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = initialiseState;
  }

  cashChange=({target})=>{
    const { name, value } = target;
    const val = Number(value);
    this.setState({
      [name]:val,
    });
    console.log(target.name);
  }
  annualCheck=({target})=>{
     this.setState({yearCal:target.checked})
  }
  // to render app
  render(){
    return(
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
        <Deduction tax={300} ssnit={140}/>
      </div>
    );
  }
}

export default Calculator;
