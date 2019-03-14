import React from "react";
import {Label,Input,Card} from "semantic-ui-react";


class CediField extends React.Component{
  constructor(props){
    super(props);
    this.textChange = this.textChange.bind(this);
  }

  textChange(e){
     this.props.onChange(e);
  }
  render(){
    return(
      <div className="cedi-field">
      <Input labelPosition="right" type='number' placeholder={this.props.name} fluid>
      <Label basic>GHS</Label>
      <input onChange={this.textChange}/>
      <Label>.00</Label>
      </Input>
      </div>

    );
  }
}

class InputFields extends React.Component{
  constructor(props){
    super(props);
    this.grossChange = this.grossChange.bind(this);
    this.allowanceChange = this.allowanceChange.bind(this);

  }
grossChange(event){
  this.props.grossChange(event);
}
allowanceChange(event){
  this.props.allowanceChange(event);
}

render(){
  return(
    <div>
    <CediField
     name="Enter gross income"
     onChange = {this.grossChange}
    />
    <Card.Meta>
    *Enter gross income in field above
    </Card.Meta>
    <CediField
     name="Enter allowance if any"
     onChange = {this.allowanceChange}
    />
    <Card.Meta>
    Enter cash allowance above
    </Card.Meta>
    </div>
  )
}
}
export default InputFields;
