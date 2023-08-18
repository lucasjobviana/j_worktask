import React, { useState, useMemo } from 'react';
import { TaskContext } from '.';
import useStorage from '../tools/hook/useStorage';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const salveOnMemory = useStorage();

  const addTask = async (task) => {
    if (tasks.find((t) => t.name === 'semNadaDeResticao')) return false;
    const { id } = await salveOnMemory('addTask', { id: 0, ...task });
    if (id) setTasks([...tasks, { id, ...task }]);
    return true;
  };

  const rmvTask = async (id) => {
    if (!tasks.find((t) => t.id === id)) return false;
    const { affectedRows } = await salveOnMemory('rmvTask', id);
    const newTasks = tasks.filter((t) => t.id !== id && t.idParentTask !== id);
    if (affectedRows) setTasks(newTasks);
    console.log('Novas     Tarefas:', newTasks);
    return true;
  };

  const editTask = async (task) => {
    if (tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask
      && t.checked === task.checked)) { return false; }
    const { id } = await salveOnMemory('editTask', { ...task });
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(newTasks);
    return true;
  };

  const contextValue = useMemo(() => ({
    tasks,
    setTasks,
    addTask,
    editTask,
    rmvTask,
  }), [tasks, setTasks, addTask, editTask, rmvTask]);

  return (
    <TaskContext.Provider value={contextValue}>
      { children }
    </TaskContext.Provider>
  );
}
