import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          // Use the functional form to get the latest state
          setNumber((prevNumber) => prevNumber + 1);
          setNumber((prevNumber) => prevNumber + 1);
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
