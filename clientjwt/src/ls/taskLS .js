const addTaskLS = (task) => {
  console.log('task:');
  console.log(task);
  console.log('tasks do ls: ');
  console.log(JSON.parse(localStorage.getItem('tasks')));

  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const idNewTask = tasks.length > 0 ? Number(Math.max(...tasks.map((t) => t.id)) + 1) : 1;
  console.log('idNewTask: ', idNewTask);
  localStorage.setItem('tasks', JSON.stringify([...tasks, { ...task, id: idNewTask }]));
  console.log('new tasks do ls:');
  console.log(JSON.parse(localStorage.getItem('tasks')));
  console.log('retorno : ', idNewTask);
  return { id: idNewTask };
};

const editTaskLS = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.map((t) => {
    if (t.id === task.id) {
      return task;
    }
    return t;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return { task };
};

const rmvTaskLS = (id) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.filter((t) => t.id !== id);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return { affectedRows: 1 };
};

const getTasksLS = () => JSON.parse(localStorage.getItem('tasks'));

export {
  addTaskLS, rmvTaskLS, getTasksLS, editTaskLS,
};
