import { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? (
        <div>
          <Counter isFancy={true} />
        </div>
      ) : (
        <div>
          <Counter isFancy={false} />
        </div>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
