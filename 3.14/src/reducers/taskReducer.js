export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "changed":
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    case "deleted":
      return tasks.filter((task) => task.id !== action.taskId);
    default:
      throw Error(`No action matched with ${action.type}`);
  }
}

/*
  if (action.type === "added") {
    return [...tasks, { id: action.id, text: action.text, done: false }];
  } else if (action.type === "changed") {
    return tasks.map((task) => {
      if (task.id === action.task.id) {
        return action.task;
      }
      return task;
    });
  } else if (action.type === "deleted") {
    return tasks.filter((task) => task.id !== action.taskId);
  } else {
    throw Error(`No action matched with ${action.type}`);
  }
  */
