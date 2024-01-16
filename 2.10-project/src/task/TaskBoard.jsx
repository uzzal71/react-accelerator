import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModel] = useState(false);

  function handleAddTask() {
    /*
    const newTask = {
      id: crypto.randomUUID(),
      title: "Learn Go Language",
      description:
        "I want to Learn Go Language Nat such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "go", "postgres"],
      priority: "High",
      isFavorite: false,
    };
    setTasks([...tasks, newTask]);
    */
    setShowAddModel(true);
  }

  function handleRemoveAllTask() {
    setTasks([]);
  }

  function handleCloseClick() {
    setShowAddModel(false);
  }

  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={"a"}
          onCloseClick={handleCloseClick}
          taskToUpdate={"b"}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={handleAddTask}
            onRemovedTask={handleRemoveAllTask}
          />
          {tasks.length > 0 ? <TaskList tasks={tasks} /> : <NoTasksFound />}
        </div>
      </div>
    </section>
  );
}
