export default function TaskAction({ onDeleteAllTask, onAddClick }) {
  return (
    <>
      <button
        onClick={onAddClick}
        className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Add Task
      </button>
      <button
        onClick={onDeleteAllTask}
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
      >
        Delete All
      </button>
    </>
  );
}
