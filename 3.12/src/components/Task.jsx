import { useState } from "react";

export default function Task({ task, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input type="text" value={task.text} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input type="checkbox" />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    </li>
  );
}
