import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { StateAndDispatch } from "./types";

export const StateContext = createContext<StateAndDispatch>(
  {} as StateAndDispatch
);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [vals, dispatch] = useReducer(reducer, {
    count: 0,
    name: "james",
  });

  return (
    <StateContext.Provider value={{ ...vals, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
