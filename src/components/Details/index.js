import React from "react";
import {TaxConsumer} from "../Landing";


const Details=()=>{
  return(
    <div className="input-layout">
      <TaxConsumer>
      {({grossInput})=> <h2>{grossInput}</h2>}
      </TaxConsumer>
   </div>);
}

export default Details;
