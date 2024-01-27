import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleSearch = (e) => {
    console.log(e.target.value);
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered =
      term !== ""
        ? // eslint-disable-next-line react/prop-types
          tasks.filter((task) => task.title.toLowerCase().includes(term))
        : tasks;

    setFilteredTasks(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Another Task" },
  ];

  return <TaskList tasks={tasks} />;
};

export default App;
