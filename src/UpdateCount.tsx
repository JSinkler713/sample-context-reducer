import { useContext } from "react";
import { StateContext } from './context';
import { BasicAction } from "./types";

interface InputProps {
  sign: BasicAction["type"];
  symbol: string;
}

const AddOrSubtract = ({sign, symbol}: InputProps) => {
  const { dispatch } = useContext(StateContext)
  return (
    <div>
      <p onClick={()=> dispatch({ type: sign})} >{symbol}</p>
    </div>
  )
};
export default AddOrSubtract;
