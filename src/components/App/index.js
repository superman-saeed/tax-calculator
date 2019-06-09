import React from "react";
import pic from "../../image/ghana.png";

//to display cash table
const Cash= ({title,hint,onchange})=>{
  return(
    <div className="cash-input">
     <div><span className="desc">{title}</span></div>
     <div>
       <span className="sp">GHS</span>
       <input type="number" onChange={onchange} placeholder={hint} />
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

class App extends React.Component{
  constructor(props){
    super(props);
  }
  // to render app
  cashChange=(event)=>{
    console.log(event.target.value);
  }
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
        hint="cash income" />

        <Cash
        onchange={this.cashChange}
        title="Allowance" hint="cash,rent,fuel"
        />
        </div>
        <AnnualChecker />
        <Deduction tax={300} ssnit={140}/>
      </div>
      </div>);
  }
}
export default App;
