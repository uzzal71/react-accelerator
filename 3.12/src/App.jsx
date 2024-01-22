export default function App() {
  return (
    <>
      <h1>Prague itinerary</h1>
      <input placeholder="Add task" />
      <button>Add</button>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <input type="text" />
            <button>Save</button>
            <button>Delete</button>
          </label>
        </li>
      </ul>
    </>
  );
}
