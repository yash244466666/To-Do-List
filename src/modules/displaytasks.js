import listTask from './listTask.js';

/* eslint-disable */
const todo = new listTask();
/* eslint-enable */

const listSection = document.querySelector('.tasks');

//  show tasks

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

      const descrptContainer = document.createElement('div');
      descrptContainer.className = 'task-div';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox';
      if (a.completed === true) {
        checkbox.checked = 'checked';
      }

      checkbox.onclick = (e) => {
        todo.completedTask(e.target.checked, a.index);
      };
      descrptContainer.appendChild(checkbox);

      const descrpt = document.createElement('p');
      descrpt.id = 'taskLabel';
      descrpt.textContent = a.description;
      descrptContainer.appendChild(descrpt);
      list.appendChild(descrptContainer);

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-solid fa-xmark';
      deleteIcon.id = a.index;
      list.appendChild(deleteIcon);

      descrpt.addEventListener('keyup', () => {
        todo.editTask(descrpt, a.index);
      });

      list.onclick = () => {
        descrpt.contentEditable = 'true';
        // todo.editTask(descrpt, a.index);
      };
      descrpt.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          todo.editTask(descrpt, a.index);
        }
      });
      listContainer.append(list);
      return list;
    });
    document.createElement('p').addEventListener('keyup', (e) => {
      if (e.target === 'taskLabel') {
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

export { displayTasks, todo };
