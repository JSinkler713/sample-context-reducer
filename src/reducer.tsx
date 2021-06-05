import { State, Action } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    case "NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
