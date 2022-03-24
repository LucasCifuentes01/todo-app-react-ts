// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../models/task";
import { tasksStorage } from "../utilities";

const initialState: Array<Task> = [];

const { setStorageTask, removeStorageTask } = tasksStorage();

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("adding Task", action.payload);
      state.push(action.payload);
      setStorageTask(state);
    },
    removeTask: (state, action) => {
      state.filter((task, i) => {
        task.id === action.payload ? state.splice(i, 1) : null;
      });
      removeStorageTask(action.payload);
    },
    updateTask: (state, action) => {
      state.filter((task) =>
        task.id === action.payload ? (task.completed = !task.completed) : null
      );
    },
    addTasks: (state, action) => {
      action.payload.map((task: Task) => state.push(task));
    },
    tasks: (state) => state,
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask, updateTask, tasks, addTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
