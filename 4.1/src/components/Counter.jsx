import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);

  const handleClick = () => {
    console.log(ref);
  };

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
