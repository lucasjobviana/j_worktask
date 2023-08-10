const addTaskLS = async (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const idNewTask = tasks.length;
  localStorage.setItem('tasks', JSON.stringify([...tasks, { ...task, id: idNewTask }]));
};

const editTaskLS = async (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.map((t) => {
    if (t.id === task.id) {
      return task;
    }
    return t;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};

const rmvTaskLS = async (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.filter((t) => t.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};

const getTasksLS = async () => JSON.parse(localStorage.getItem('tasks'));

export {
  addTaskLS, rmvTaskLS, getTasksLS, editTaskLS,
};
