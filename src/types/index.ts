import React from "react";

export type ReactChange = React.ChangeEvent<HTMLInputElement>;

export type DispatchType = {
  dispatch: React.Dispatch<Action>;
};
export type State = {
  count: number;
  name: string;
};

export type StateAndDispatch = State & DispatchType;

// reducer
export type BasicAction = {
  type: "ADD" | "SUBTRACT";
};

export type NameAction = {
  type: "NAME";
  payload: string;
};
// saying there needs to be a payload as a string only for type: 'NAME'
// which is what we want
export type Action = BasicAction | NameAction;
