import { useState } from "react";
import Mirror from "./components/Mirror";

function App() {
  const [color, setColor] = useState("red");

  const handleChangeColor = () => {
    setColor("blue");
  };

  return (
    <>
      <Mirror messageColor={color} />
      <br />
      <button onClick={handleChangeColor}>Change color from parent</button>
    </>
  );
}

export default App;
