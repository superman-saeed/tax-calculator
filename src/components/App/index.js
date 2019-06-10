import React from "react";
import Details from "../Details";
import pic from "../../image/ghana.png";

//to display cash table
const Cash= ({title,hint,onchange,name})=>{
  return(
    <div className="cash-input">
     <div><span className="desc">{title}</span></div>
     <div>
       <span className="sp">GHS</span>
       <input type="number" name={name} onChange={onchange} placeholder={hint} />
     </div>
    </div>
  );
}
//to display AnnualChecker calculation
const AnnualChecker=()=>{
  return(
  <div>
  <label className="container"><span className="desc">Check for Annual</span>
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
 </div>
);
}
//to display tax and ssnit Deduction
const Deduction=({ssnit,tax, total}) =>{
    return(
      <div>
      <span>SSNIT Deduction {ssnit}ghc</span><br/>
      <span>Tax Deduction {tax}ghc</span>
      <h2> 360ghc </h2>
      </div>);
}

const Footer=()=>{
  return(
    <div style={{color:"red", textAlign:"center"}}>
    Made with <span>&#128151;</span> by <a href="htt">Saeed</a>
    </div>
  )
}
const initialiseState={
   grossInput:0,
   allowanceInput:0,
   annualChecker:false,
   taxDeduction:0,
   ssnitDeduction:0,
   netIncome:0
}
class App extends React.Component{
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
  // to render app
  render(){
    return(
      <div className="app">
      <span className="country"><img src={pic} alt="gh logo"></img> </span>
      <div className="main">
        <h3>Tax calculator</h3>
        <div className="cal">
        <Cash
        onchange={(e)=>this.cashChange(e)}
        title="Monthly Gross Income* "
        name="grossInput"
        hint="cash income" />

        <Cash
        onchange={this.cashChange}
        title="Allowance"
        name="allowanceInput"
        hint="cash,rent,fuel"
        />
        </div>
        <AnnualChecker />
        <Deduction tax={300} ssnit={140}/>
      </div>
      <Footer />
      </div>);
  }
}
export default App;
