import React, { useState, useEffect, useContext } from 'react';
import { WorkContext, ControlPanelContext, TaskContext } from '.';
import { addWorkAPI, rmvWorkAPI, editWorkAPI } from '../api/workAPI';

export default function WorkProvider({ children }) {
  const [works, setWorks] = useState([]);
  const { rmvWorkView } = useContext(ControlPanelContext);
  const { tasks } = useContext(TaskContext);
  // const [ tasks, setTasks ] = useContext(TaskContext);
  // const { works, setWorks } = useContext(WorkContext)

  const addWork = async (work) => {
    if (works.find((w) => w.name === work.name)) return false;
    const workIds = works.map((w) => Number(w.id));
    const newId = Math.max(...workIds) + 1;
    const { id } = await addWorkAPI({ id: newId, ...work });
    if (id) { setWorks([...works, { id, ...work }]); }
    // setWorks([ ...works, { id: newId, ...work } ]);//salvar no bd aqui
    return true;
  };

  const rmvWork = async (id) => {
    if (!works.find((t) => t.id === id)) return false;
    const { affectedRows } = await rmvWorkAPI(id);
    // const newWorks = works.filter((t)=>t.id !== id);

    if (affectedRows) {
      const newTasks = tasks.filter((t) => t.idWork !== id);
      // setWorks(newWorks);
      // setTasks(newTasks);
      rmvWorkView(id);
    }
    return true;
  };

  const editWork = async (work) => {
    // if (tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask && t.checked === task.checked)) return false;
    const { id } = await editWorkAPI({ ...work });
    const newWorks = works.map((t) => {
      if (t.id === work.id) {
        return work;
      }
      return t;
    });
    if (id == work.id) setWorks(newWorks);
    return true;
  };

  useEffect(() => {
    console.log('WorkProvide.useEffect(null): ', works);
  });

  return (
    <WorkContext.Provider value={{
      works, setWorks, addWork, rmvWork, editWork,
    }}
    >
      { children }
    </WorkContext.Provider>
  );
}
