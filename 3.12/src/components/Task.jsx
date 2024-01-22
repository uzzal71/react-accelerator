import { useState } from "react";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <label>
        <input type="checkbox" />
        {isEditing ? <input type="text" value={task.text} /> : task.text}
        <button>{isEditing ? "Save" : "Edit"}</button>
        <button>Delete</button>
      </label>
    </li>
  );
}
