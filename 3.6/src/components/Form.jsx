import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const handleAddInput = () => {
    /*
    setInputs((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        label: "input",
      },
    ]);
    */
    const nextId = inputs[inputs.length - 1].id;
    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id} style={{ marginBottom: "10px" }}>
          <input type="text" label={input.label} />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
