import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function App() {
  const person = { name: "Lin Lanying", imageId: "1bX5QH6" };
  const size = 100;
  const age = 30;

  return (
    <div>
      <Profile>
        <Avatar person={person} size={size} age={age} />
      </Profile>
    </div>
  );
}

export default App;
