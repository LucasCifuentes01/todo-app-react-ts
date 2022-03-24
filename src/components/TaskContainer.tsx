import Task from "./Task";
import { useAppSelector, useAppDispatch } from "../hooks";
import { P } from "../styled-components/fonts";
import { TaskContainerStyled } from "../styled-components/components";
import { useEffect } from "react";
import { tasksStorage } from "../utilities";
import { addTasks } from "../redux/tasksSlice";

const NotesContainer = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const { getStorageTasks } = tasksStorage();
    const tasks = getStorageTasks();
    if (tasks && tasks.length > 0) {
      dispatch(addTasks(tasks));
    }
  }, []);
  return (
    <TaskContainerStyled>
      {tasks.length > 0 ? (
        tasks.map((task, index) => <Task task={task} key={index} />)
      ) : (
        <P>No hay tareas</P>
      )}
    </TaskContainerStyled>
  );
};

export default NotesContainer;
