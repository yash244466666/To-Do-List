import { displayTasks, todo } from './displaytasks.js';

const getAddedTodos = () => {
  const newTodo = document.getElementById('task-info');
  const description = newTodo.value;
  if (description !== '') {
    todo.addTask(description);
    displayTasks();
    newTodo.value = '';
  }
};

export default getAddedTodos;
