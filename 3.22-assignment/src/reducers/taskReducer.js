import {
  ADD_TASK,
  DELETE_TASK,
  FAVORITE_TASK,
  UPDATE_TASK,
} from "./taskReducerType";

const initialState = {
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Learn React Native",
      description:
        "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
      tags: ["web", "react", "js"],
      priority: "High",
      isFavorite: false,
    },
  ],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case FAVORITE_TASK:
      return {
        ...state,
        tasks: [...action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((x) => x.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { initialState, taskReducer };
