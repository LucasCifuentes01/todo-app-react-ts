import Button from "./Button";
import { Task } from "../models/task";
import { TaskStyled } from "../styled-components/components";
import { P } from "../styled-components/fonts";
import { useAppDispatch } from "../hooks";
import { removeTask, updateTask } from "../redux/tasksSlice";

type Props = {
  task: Task;
};

const TaskComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleDeleteTask = () => {
    dispatch(removeTask(props.task.id));
  };
  const handleTaskState = () => {
    dispatch(updateTask(props.task.id));
  };
  return (
    <TaskStyled>
      <input type="checkbox" onChange={handleTaskState} />
      <P lineThrough={props.task.completed}>{props.task.text}</P>
      <Button onClick={handleDeleteTask} text="X" />
    </TaskStyled>
  );
};

export default TaskComponent;
