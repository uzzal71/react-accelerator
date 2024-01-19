import { useState } from "react";

export default function Form() {
  // visual states: typing, submitting, success

  // mandatory data statte
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // visual state theke paoa final state
  const [status, setStatus] = useState("typing");

  // handlers
  const handleTextChange = (event) => {
    setError(null);
    setAnswer(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  };

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  if (status === "success") return <h1>Thats right!</h1>;

  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}
