const addWorkLS = (work) => {
  const works = JSON.parse(localStorage.getItem('works'));
  const idNewWork = works.length > 0 ? Number(Math.max(...works.map((w)=>w.id)) + 1) : 1 ;
  localStorage.setItem('works', JSON.stringify([...works, { ...work, id: idNewWork }]));
  return { id: idNewWork };
};

const editTasksOfWork = (work) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const idsToAlter = work.tasks.map((t) => t.id);
  const newTasks = tasks.map((t) => {
    if (idsToAlter.includes(t.id)) {
      const newTask = work.tasks.find((task) => task.id === t.id);
      return { ...newTask, idWork: t.idWork, idParentTask: t.idParentTask || null };
    }
    return t;
  });

  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTasks;
};

const editWorkLS = (work) => {
  const works = JSON.parse(localStorage.getItem('works'));
  const newWorks = works.map((w) => {
    if (w.id === work.id) {
      const { tasks, ...workWithoutTask } = work;
      return workWithoutTask;
    }
    return w;
  });
  localStorage.setItem('works', JSON.stringify(newWorks));

  editTasksOfWork(work);
  return { work };
};

const rmvTasksOfWork = (id=0) => {
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const newTasks = tasks.filter((task)=> task.idWork !== id);
	localStorage.setItem('tasks',JSON.stringify(newTasks));
}

const rmvWorkLS = (id) => {
  const works = JSON.parse(localStorage.getItem('works'));
  const newWorks = works.filter((t) => t.id !== id);
  localStorage.setItem('works', JSON.stringify(newWorks));
  rmvTasksOfWork(id);
  return { affectedRows: 1 };
};

const getWorksLS = () => JSON.parse(localStorage.getItem('works'));

export {
  addWorkLS, rmvWorkLS, getWorksLS, editWorkLS,

};
