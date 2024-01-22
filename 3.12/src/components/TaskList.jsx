import Task from "./Task";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
