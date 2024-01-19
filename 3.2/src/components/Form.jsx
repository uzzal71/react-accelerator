export default function Form({ status = "empty" }) {
  // visual states: empty, typing, submitting, success, error

  if (status === "success") return <h1>Thats right!</h1>;

  return (
    <>
      <form>
        <textarea></textarea>
        <br />
        <button>Submit</button>
        <p>Loading...</p>
        <p className="Error">There was an error</p>
      </form>
    </>
  );
}
