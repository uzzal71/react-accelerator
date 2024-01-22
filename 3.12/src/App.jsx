import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}
