import { useContext } from "react";
import { StateContext } from "./context";
import { ReactChange } from "./types";

const ChangeName = () => {
  const { name, dispatch } = useContext(StateContext);
  const handleNameChange = (e: ReactChange) => {
    dispatch({ type: "NAME", payload: e.target.value });
  };

  return (
    <div>
      <form>
        <input onChange={(e) => handleNameChange(e)} value={name} />
      </form>
    </div>
  );
};
export default ChangeName;
