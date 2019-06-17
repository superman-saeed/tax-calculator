import React from "react";
import {InfoConsumer}  from "../App/context";
import {Cash, AnnualChecker, Deduction} from "./partials";


class Calculator extends React.Component{

  // to render app
  render(){
      const {cashChange, checker} =this.props;

    return(

      <div className="input-layout">
        <h3>Tax calculator</h3>
        <div className="cal">
        <Cash
        onchange={cashChange}
        title="PAYE Gross Income* "
        name="grossInput"
        hint="cash income" />

        <Cash
        onchange={cashChange}
        title="Allowance"
        name="allowanceInput"
        hint="cash,rent,fuel"
        />
        </div>
        <AnnualChecker checker={checker}/>
        <InfoConsumer>{(state)=>(
          <Deduction
          tax={state.taxDeduction}
          ssnit={state.ssnitDeduction}
          netIncome ={state.netIncome}
           />
        )}</InfoConsumer>

      </div>

    );
  }
}

export default Calculator;
