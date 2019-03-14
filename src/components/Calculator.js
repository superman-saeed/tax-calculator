import React from "react";
import {Card,Checkbox}
from "semantic-ui-react";
import InputFields from "./InputFields";
import TaxInfo from "./TaxInfo";
import taxCalculator from "../lib/tax-calculator";

function isPositiveNumber(number) {
  const positiveNumberRegex = /^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/;
  return positiveNumberRegex.test(number);
}

const STARTER ={
  grossIncome : 0,
  netIncome:0,
  allowance:0,
  ssnit:0,
  tax:0,

}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.grossChange = this.grossChange.bind(this);
    this.allowanceChange = this.allowanceChange.bind(this);
    this.state = STARTER;
  }

  grossChange(event){
    let value = event.target.value,cash =0;
    if(isPositiveNumber(value)){// verify input
    cash = parseFloat(value)
    this.setState(taxCalculator(cash, this.state.allowance));
    this.setState({grossIncome:cash});
  }else if(value === "") { // replace "" with 0
    this.setState(taxCalculator(0, this.state.allowance));
    this.setState({grossIncome:0});
  }

  }
  allowanceChange(event){
    let value = event.target.value,cash =0;
    if(isPositiveNumber(value)){ // verify input
    cash = parseFloat(value);
    this.setState(taxCalculator(this.state.grossIncome, cash));
    this.setState({allowance :cash});
  }else if(value === "") {// replace "" with 0
    this.setState(taxCalculator(this.state.grossIncome, 0));
    this.setState({allowance :0});

  }
}
  render(){
    return(
      <div className="parent-block">
      <Card fluid>
      <Card.Content>
      <Card.Header>Tax Calculator</Card.Header>
      <InputFields
      grossChange ={this.grossChange}
      allowanceChange ={this.allowanceChange}
      />
      <TaxInfo
      income={this.state.netIncome}
      ssnit={this.state.ssnit}
      tax ={this.state.tax}/>

      </Card.Content>
      </Card>

      <Card fluid>
      <Card.Content>
      <Card.Description>Disclaimer: We do our best to ensure the accuracy of this tool but we cannot be held responsible for any errors.</Card.Description>
       Developer <a href="https://superman-saeed.github.io">Saeed Abdul-Wahab</a>
      </Card.Content>
      </Card>
      </div>
    )
  }
}
export default Calculator;
