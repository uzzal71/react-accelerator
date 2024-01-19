import { useState } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    // setPosition((prev) => ({ ...prev, y: prev.y + 5 }));
    // setPosition({ ...position, y: position.y + 5 });
    // setPosition({ ...position, x: event.clientX, y: event.clientY });
    setPosition((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={handlePointerMove}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: -10,
          top: -10,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
}
