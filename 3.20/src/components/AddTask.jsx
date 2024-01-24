import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/TasksContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          dispatch({ type: "added", text: text, id: getNextId(tasks) });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
