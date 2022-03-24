import { Task } from "../models/task";

export const generateID = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const tasksStorage = () => {
  const getStorageTasks = () => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    }
    return null;
  };
  const setStorageTask = (tasks: Array<Task>) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const removeStorageTask = (task: Task) => {
    const tasks = getStorageTasks();
    if (tasks) {
      const newTasks = tasks.filter((currentTask: Task, i: string) =>
        currentTask.id === task.id ? tasks.splice(i, 1) : null
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  };

  return {
    getStorageTasks,
    setStorageTask,
    removeStorageTask,
  };
};
