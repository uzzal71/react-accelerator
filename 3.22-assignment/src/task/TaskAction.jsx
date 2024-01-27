import { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../contexts/taskContext";
import { REMOVED_TASK } from "../reducers/taskReducerType";

export default function TaskAction({ onDeleteAllTask, onAddClick }) {
  const { state, dispatch } = useContext(TaskContext);

  const handleAllDeleteTask = (task) => {
    dispatch({
      type: REMOVED_TASK,
      payload: [],
    });
    toast.error(`Delete all in the task list.`, {
      position: "bottom-right",
    });
  };

  return (
    <>
      <button
        onClick={onAddClick}
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Add Task
      </button>
      <button
        onClick={handleAllDeleteTask}
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Delete All
      </button>
    </>
  );
}
