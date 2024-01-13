import Recipe from "./components/Recipe";
import TeaSet from "./components/TeaSet";

function App() {
  return (
    <div>
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
      </section>
      <TeaSet />
    </div>
  );
}

export default App;
