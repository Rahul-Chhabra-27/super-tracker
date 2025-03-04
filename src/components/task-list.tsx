import { useContext } from 'react';
import ApplicationContext from '../context';
import Task from './task';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);
  // const tasks = useSelector(state => state.tasks.entiries); // unknown

  // const tasks = useSelector((state:{ tasks : { entities : Task[] } }) => state.tasks.entities);
  const tasks = useSelector((state: ApplicationState) => state.tasks.entities,);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
