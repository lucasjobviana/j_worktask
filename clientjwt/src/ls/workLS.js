const addWorkLS = (work) => {
  const works = JSON.parse(localStorage.getItem('works'));

  const idNewWork = works.length + 1;
  localStorage.setItem('works', JSON.stringify([...works, { ...work, id: idNewWork }]));
  return { id: idNewWork };
};

const editWorkLS = async (work) => {
  const works = JSON.parse(localStorage.getItem('works'));
  const newWorks = works.map((w) => {
    if (w.id === work.id) {
      return work;
    }
    return w;
  });
  localStorage.setItem('works', JSON.stringify(newWorks));
};

const rmvWorkLS = async (id) => {
  const works = JSON.parse(localStorage.getItem('works'));
  const newWorks = works.filter((t) => t.id !== id);
  localStorage.setItem('works', JSON.stringify(newWorks));
};

const getWorksLS = async () => JSON.parse(localStorage.getItem('works'));
export {
  addWorkLS, rmvWorkLS, getWorksLS, editWorkLS,

};
