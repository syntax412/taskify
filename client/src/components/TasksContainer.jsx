import Task from './Task';
import Wrapper from '../assets/wrappers/TasksContainer';
import { useAllTasksContext } from '../pages/AllTasks';
import PageBtnContainer from './PageBtnContainer';
const TasksContainer = () => {
  const { data } = useAllTasksContext();

  const { tasks, totalTasks, numOfPages } = data;
  if (tasks.length === 0) {
    return (
      <Wrapper>
        <h2>No tasks to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalTasks} task{tasks.length > 1 && 's'} found
      </h5>
      <div className="tasks">
        {tasks.map((task) => {
          return <Task key={task._id} {...task} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default TasksContainer;
