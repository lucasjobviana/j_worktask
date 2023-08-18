import React, { useState, useEffect, useContext } from 'react';
import { WorkContext, ControlPanelContext, TaskContext } from '.';
import useStorage from '../tools/hook/useStorage';

export default function WorkProvider({ children }) {
  const [works, setWorks] = useState([]);
  const { rmvWorkView } = useContext(ControlPanelContext);
  const { tasks, setTasks } = useContext(TaskContext);
  const salveOnMemory = useStorage();

  const addWork = async (work) => {
    if (works.find((w) => w.name === work.name)) return false;
    const newId = 1;
    const { id } = await salveOnMemory('addWork', { id: newId, ...work }); // addWorkAPI({ id: newId, ...work });
    if (id) { setWorks([...works, { id, ...work }]); }
    return true;
  };

  const rmvWork = async (id) => {
    if (!works.find((t) => t.id === id)) return false;
    const { affectedRows } = await salveOnMemory('rmvWork', id); // rmvWorkAPI(id);
    const newWorks = works.filter((t) => t.id !== id);

    if (affectedRows) {
      const newTasks = tasks.filter((t) => t.idWork !== id);
      setWorks(newWorks);
      setTasks(newTasks);
      rmvWorkView(id);
    }
    return true;
  };

  const editWork = async (work) => {
    // if (tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask && t.checked === task.checked)) return false;
    const { id } = await salveOnMemory('editWork', { ...work }); // editWorkAPI({ ...work });
    const newWorks = works.map((t) => {
      if (t.id === work.id) {
        return work;
      }
      return t;
    });
    const idsToAlter = work.tasks.map((t) => t.id);
    const newTasks = tasks.map((t) => {
      if (idsToAlter.includes(t.id)) {
        const newTask = work.tasks.find((task) => task.id === t.id);
        return { ...newTask, idWork: t.idWork, idParentTask: t.idParentTask || null };
      }
      return t;
    });

    setTasks(newTasks);
    setWorks(newWorks);

    return true;
  };

  return (
    <WorkContext.Provider value={{
      works, setWorks, addWork, rmvWork, editWork,
    }}
    >
      { children }
    </WorkContext.Provider>
  );
}
