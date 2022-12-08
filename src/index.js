/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

import './style.css';

const tasks = [
  {
    description: 'Reapir the car',
    completed: false,
    index: 1,
  },
  {
    description: 'Copmplete the Projects',
    completed: false,
    index: 2,
  },
  {
    description: 'Submit the project',
    completed: false,
    index: 3,
  },
];

const displayTasks = () => {
  let result = '';
  tasks.filter((tasks) => tasks.index > 0).forEach((task) => {
    result += `
    <div class="item-container">
      <div class="do-items">
        <input type='checkbox' name='${task}'>
        <label for=task>${task.description}</label>
        <div class="item-dlt-btn">
        <i class="fa-solid fa-xmark do-cross"></i>
      </div>
        <br>
      </div>

    </div>
    `;
  });
  document.getElementById('task').innerHTML = result;
};

displayTasks();