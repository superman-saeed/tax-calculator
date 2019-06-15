import React from "react";
import Details from "../Details";
import Landing from "../Landing";
import {BrowserRouter as Router, Route} from "react-router-dom";
import * as urls from "../../constants/route";
import {Footer} from "../Landing/partials"
import pic from "../../image/ghana.png";


const App=()=>{
  return(
    <Router>
    <div className="calculator">
     <span className="country"><img src={pic} alt="gh logo"></img> </span>
     <Route exact path={urls.LANDING} component={Landing}></Route>
     <Route path={urls.INFO} component={Details}></Route>
     <Footer />
   </div>
    </Router>
  )
}
export default App;
