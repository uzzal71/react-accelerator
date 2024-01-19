import { useState } from "react";

export default function Mirror({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  const handleChangeColor = () => {
    setColor("purple");
  };

  return (
    <div>
      <div style={{ color }}>Hello world</div>
      <button onClick={handleChangeColor}>Change color from child</button>
    </div>
  );
}
