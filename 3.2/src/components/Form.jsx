export default function Form({ status = "empty" }) {
  // visual states: empty, typing, submitting, success, error

  if (status === "success") return <h1>Thats right!</h1>;

  return (
    <>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {status === "error" && <p className="Error">There was an error</p>}
      </form>
    </>
  );
}
