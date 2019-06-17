import React from "react";
import Details from "../Details";
import Landing from "../Landing";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import * as urls from "../../constants/route";
import {Footer} from "../Landing/partials"
import NoMatch from "../NotFound/index"
import {InfoProvider} from "./context";
import computeTax from "../../lib/tax-calculator";
import pic from "../../image/ghana.png";

const initialiseState={
   grossInput:0,
   allowanceInput:0,
   annualChecker:false,
   taxDeduction:0,
   ssnitDeduction:0,
   netIncome:0,
   yearCal:false,
   taxSteps:[],
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialiseState;
  }

  cashChange=({target})=>{
    const { name, value, yearCal} = target;
    const {grossInput,allowanceInput}= this.state;
    const val = Number(value);
    const taxcal = name==="grossInput" ?
     computeTax(val, allowanceInput,yearCal)
     :computeTax(grossInput, val,yearCal);

    this.setState({
      [name]:val,
      ...taxcal
    });


  }
  annualCheck=({target})=>{
     this.setState({yearCal:target.checked})
  }

  render(){
    return(
      <InfoProvider value={this.state}>
      <Router>

        <div className="calculator">
         <span className="country"><img src={pic} alt="gh logo"></img> </span>
            <Switch>

              <Route path={urls.LANDING} exact
              render={()=><Landing cashChange={this.cashChange} checker={this.annualCheck}/>} />

              <Route path={urls.INFO} component={Details} />
              <Route component={NoMatch} />

            </Switch>
         <Footer />
       </div>

      </Router>
      </InfoProvider>
    )
  }
}


export default App;
