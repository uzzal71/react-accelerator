import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { TaskContext, TaskDispatchContext } from "./contexts/TasksContext";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

export default function App() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const handleChangeTask = (newTask) => {
    dispatch({ type: "changed", task: newTask });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "deleted", taskId: taskId });
  };

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
