import { useEffect } from "react";
import MyComponent from "./components/MyComponent";

function App() {
  useEffect(() => {
    console.log("Hello World!");
  });

  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
