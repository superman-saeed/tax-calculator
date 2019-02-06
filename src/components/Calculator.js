import React from "react";
import {Card,Checkbox,Divider,Statistic}
from "semantic-ui-react";
import AllField from "./AllFields";

class Calculator extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="cal">
      <Card fluid>

      <Card.Content extra>
      <span>PAYE</span>
      <Card.Header
      style={{color:'#04e76f'}}>
      tax calculator
      </Card.Header>

      <AllField />

      <Checkbox label='check calculate yearly rate' toggle />


      <Statistic>
      <Statistic.Value>5,550</Statistic.Value>
      <Statistic.Label>Is your take home</Statistic.Label>
      </Statistic>

      <Divider horizontal> Details</Divider>
      </Card.Content>

      </Card>
      </div>
    )
  }
}
export default Calculator;
