import { useState } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <ThemeContext.Provider>
          <Page />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
