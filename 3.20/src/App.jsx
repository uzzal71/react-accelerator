import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { TaskContext, TaskDispatchContext } from "./contexts/TasksContext";

export default function App() {
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
