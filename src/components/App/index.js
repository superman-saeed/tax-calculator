import React from "react";
import Details from "../Details";
import Landing from "../Landing";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import * as urls from "../../constants/route";
import {Footer} from "../Landing/partials"
import NoMatch from "../NotFound/index"
import pic from "../../image/ghana.png";


const App=()=>{
  return(
    <Router>
    <div className="calculator">
     <span className="country"><img src={pic} alt="gh logo"></img> </span>
        <Switch>

          <Route path={urls.LANDING} exact component={Landing} />
          <Route path={urls.INFO} component={Details} />
          <Route component={NoMatch} />

        </Switch>
     <Footer />
   </div>
    </Router>
  )
}
export default App;
