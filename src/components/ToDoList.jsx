import { useSelector, useDispatch } from 'react-redux';
import { updateTaskStatus, deleteTask } from './todoSlice';

const TodoList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleToggleStatus = (taskId) => {
    dispatch(
      updateTaskStatus({
        taskId: taskId,
        status: 'completed',
      })
    );
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <div key={task.id}>
          {task.name} - {task.status}
          <button onClick={() => handleToggleStatus(task.id)}>
            Toggle Status
          </button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
