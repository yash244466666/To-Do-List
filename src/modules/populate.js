import { displayTasks, todo } from './displaytasks.js';

const populate = () => {
  if (localStorage.getItem('tasks')) {
    todo.getStoredTasks();
    displayTasks();
  } else {
    displayTasks();
  }
};

export default populate;
