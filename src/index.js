/* eslint-disable */
import _ from 'lodash';
/* eslint-enable */

import './style.css';

class TaskList {
  allTasks = [];
  // tasks = JSON.stringify(this.allTasks);

  addTask(description) {
    const task = {
      description,
      isCompleted: false,
      index: this.allTasks.length + 1,
    };
    this.allTasks.push(task);
    this.saveTask();
  }

  deleteTask(index) {
    this.allTasks.splice(index - 1, 1);
    this.updateIndex();
    this.saveTask();
  }

  updateIndex() {
    this.allTasks.map((a) => {
      a.index = this.allTasks.indexOf(a) + 1;
      return a;
    });
  }

  saveTask() {
    const tasks = JSON.stringify(this.allTasks);
    localStorage.setItem('tasks', tasks);
  }

  getStoredTodos() {
    this.allTasks = JSON.parse(localStorage.getItem('tasks'));
  }

  completedTask(status, index) {
    this.allTasks[index - 1].isCompleted = status;
    // this.updateIndex();
    this.saveTask();
  }

  editTask(paragraph, index) {
    this.allTasks[index - 1].description = paragraph.textContent;
    JSON.stringify(this.allTasks);
    localStorage.setItem('tasks', this.saveTask.tasks);
    this.updateIndex();
    this.saveTask();
  }

  getStoredTasks() {
    this.allTasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

const todo = new TaskList();

const listSection = document.querySelector('.tasks');
const form = document.getElementById('form');

// Show Tasks

const displayTasks = () => {
  listSection.replaceChildren();
  if (todo.allTasks.length > 0) {
    listSection.style.display = 'block';
    const listContainer = document.createElement('ul');
    listContainer.className = 'item';
    listSection.appendChild(listContainer);
    todo.allTasks.map((a) => {
      const list = document.createElement('li');
      list.className = 'itme-desc';

      const descriptContainer = document.createElement('div');
      descriptContainer.className = 'task-div';

      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.id = 'checkbox';
      if (a.isCompleted === true) {
        checkBox.checked = 'checked';
      }

      checkBox.onclick = (e) => {
        todo.completedTask(e.target.checked, a.index);
      };

      descriptContainer.appendChild(checkBox);

      const descript = document.createElement('p');
      descript.id = 'taskLabel';
      descript.textContent = a.description;
      descriptContainer.appendChild(descript);
      list.appendChild(descriptContainer);

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-solid fa-xmark X';
      deleteIcon.id = a.index;
      list.appendChild(deleteIcon);

      list.onclick = () => {
        descript.contentEditable = 'true';
        TaskList.saveTask();
      };
      listContainer.append(list);
      return list;
    });
    document.createElement('p').addEventListener('keyup', (e) => {
      if (e.target.id === 'task-description') {
        if (e.key === 'Enter') {
          displayTasks();
        } else {
          /* eslint-disable */
          todo.editTask(e.target, a.index);
          /* eslint-enable */
        }
      }
    });
    listSection.appendChild(listContainer);
  }
};

// add a task

const getAddedTodos = () => {
  const newTodo = document.getElementById('task-info');
  const description = newTodo.value;
  if (description !== '') {
    todo.addTask(description);
    displayTasks();
    newTodo.value = '';
  }
};
form.addEventListener('submit', getAddedTodos);

// delete a task

const delTask = (index) => {
  todo.deleteTask(index);
  todo.saveTask();
  displayTasks();
};

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-xmark X') {
    delTask(e.target.id);
  }
});

// get task form localStorage

const populate = () => {
  if (localStorage.getItem('tasks')) {
    todo.getStoredTasks();
    displayTasks();
  } else {
    displayTasks();
  }
};

populate();
