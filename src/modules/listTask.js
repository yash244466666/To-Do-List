export default class listTask {
  allTasks = [];

  saveTask() {
    const tasks = JSON.stringify(this.allTasks);
    localStorage.setItem('tasks', tasks);
  }

  addTask(description) {
    const task = {
      description,
      completed: false,
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

  getStoredTasks() {
    this.allTasks = JSON.parse(localStorage.getItem('tasks'));
  }

  editTask(paragraph, index) {
    this.allTasks[index - 1].description = paragraph.textContent;
    this.saveTask();
  }

  completedTask(status, index) {
    this.allTasks[index - 1].completed = status;
    this.saveTask();
  }

  clearCompleted() {
    this.allTasks = this.allTasks.filter((b) => b.completed === false);
    this.updateIndex();
    this.saveTask();
  }

  updateIndex() {
    this.allTasks.map((a) => {
      a.index = this.allTasks.indexOf(a) + 1;
      return a;
    });
  }
}
