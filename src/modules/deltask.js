import { displayTasks, todo } from './displaytasks.js';

const delTask = (index) => {
  todo.deleteTask(index);
  todo.saveTask();
  displayTasks();
};

export default delTask;
