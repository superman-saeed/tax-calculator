import React from "react";
import {Statistic,Divider} from "semantic-ui-react";

class TaxInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="tax-info">
      <Statistic>
      <Statistic.Value>{this.props.income.toFixed(2)}</Statistic.Value>
      <Statistic.Label>Net Income</Statistic.Label>
      </Statistic>
      <div>
      <Divider horizontal> Details</Divider>
      <ul>
      <li>SSNIT(5.5%): {this.props.ssnit.toFixed(2)}</li>
      <li>Tax: {this.props.tax.toFixed(2)}</li>
      <li>Total Dedutions: {this.props.total.toFixed(2)} </li>
      </ul>
      </div>
     </div>
    );
  }
}

export default TaxInfo;
