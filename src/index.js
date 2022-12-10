import './style.css';
import delTask from './modules/deltask.js';
import getAddedTodos from './modules/newtask.js';
import populate from './modules/populate.js';
import clearCompletedTasks from './modules/clearCompletedTasks.js';

const form = document.getElementById('form');

//  add a task

form.addEventListener('submit', getAddedTodos);
//  delete a task

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-xmark') {
    delTask(e.target.id);
  }
});

//  get tasks from localstorage

populate();

// Clear completed tasks
const clearTasks = document.getElementById('clear-btn');
clearTasks.addEventListener('click', clearCompletedTasks);

// edit task
