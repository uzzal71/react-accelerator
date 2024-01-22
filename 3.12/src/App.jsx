import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
  };

  const handleChangeTask = (newTask) => {
    const nextTask = tasks.concat.map((task) => {
      if (task.id === newTask.id) {
        return newTask;
      }
      return task;
    });
    setTasks(nextTask);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </>
  );
}
