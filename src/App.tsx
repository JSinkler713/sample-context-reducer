import "./App.css";
import { useContext } from "react";
import { StateContext } from "./context";
import UpdateCount from "./UpdateCount";
import ChangeName from "./ChangeName";

function App() {
  const { name, count } = useContext(StateContext);
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{name}</p>
      <h2>Our current Count is </h2>
      <p>{count}</p>
      <UpdateCount sign="ADD" symbol="+" />
      <UpdateCount sign="SUBTRACT" symbol="-" />
      <ChangeName />
    </div>
  );
}

export default App;
