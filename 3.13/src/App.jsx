import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    dispatch({ type: "added", text: text, id: getNextId(tasks) });
  };

  const handleChangeTask = (newTask) => {
    dispatch({ type: "changed", task: newTask });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "deleted", taskId: taskId });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
