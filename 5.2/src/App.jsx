import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <div>
        <h1>API Request Axios</h1>
        <hr />
        <div>
          <Posts onDeletePost={""} onEditClick={""} />
        </div>
      </div>
    </div>
  );
}

export default App;
