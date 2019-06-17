import React from "react";

const Context = React.createContext();
export default Context;
export const InfoProvider = Context.Provider;
export const InfoConsumer = Context.Consumer;
