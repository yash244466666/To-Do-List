import { displayTasks, todo } from './displaytasks.js';

const clearCompletedTasks = () => {
  todo.clearCompleted();
  displayTasks();
};

export default clearCompletedTasks;
