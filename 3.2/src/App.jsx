import Form from "./components/Form";
import "./styles.css";
const status = ["empty", "typing", "submitting", "success", "error"];

function App() {
  return (
    <>
      {status.map((status) => (
        <Form key={status} status={status} />
      ))}
    </>
  );
}

export default App;
