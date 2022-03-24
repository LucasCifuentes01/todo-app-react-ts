import React from "react";
import Input from "../components/Input";
import { useState } from "react";
import { Task } from "../models/task";
import { generateID } from "../utilities";
import { useAppDispatch } from "../hooks";
import { addTask } from "../redux/tasksSlice";

const Form = () => {
  const [task, setTask] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value);
  };

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    const taskToSave: Task = {
      text: task,
      completed: false,
      id: generateID(),
    };
    dispatch(addTask(taskToSave));
    setTask("");
  };

  return (
    <form onSubmit={(e: React.FormEvent): void => addNewTask(e)}>
      <Input
        value={task}
        placeholder="Add new task"
        onChange={(e: React.FormEvent<HTMLInputElement>): void =>
          handleChange(e)
        }
      />
    </form>
  );
};

export default Form;
