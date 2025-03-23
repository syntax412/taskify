import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaCheck,
} from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Task';
import TaskInfo from './TaskInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Task = ({
  _id,
  title,
  description,
  taskLocation,
  taskType,
  createdAt,
  taskStatus,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{title.charAt(0)}</div>
        <div className="info">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <TaskInfo icon={<FaLocationArrow />} text={taskLocation} />
          <TaskInfo icon={<FaCalendarAlt />} text={date} />
          <TaskInfo icon={<FaBriefcase />} text={taskType} />
          <div className={`status ${taskStatus}`}>{taskStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../edit-task/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-task/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
          {taskStatus !== 'done' && (
            <Form method="post" action={`../done-task/${_id}`}>
              <button type="submit" className="btn done-btn">
                <FaCheck />
              </button>
            </Form>
          )}
        </footer>
      </div>
    </Wrapper>
  );
};
export default Task;
