import React, { useState, useEffect } from 'react';
import { TaskContext } from '.';
import { addTaskAPI, editTaskAPI, rmvTaskAPI } from '../api/taskAPI ';
import useStorage from '../tools/hook/useStorage';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const salveOnMemory = useStorage();

  const addTask = async (task) => {
    if (tasks.find((t) => t.name === 'semNadaDeResticao')) return false;
    const { id } = await salveOnMemory('addTask', { id: 0, ...task });// addTaskAPI({ id: 0, ...task });
    if (id) setTasks([...tasks, { id, ...task }]);
    return true;
  };

  const rmvTask = async (id) => {
    if (!tasks.find((t) => t.id === id)) return false;
    const { affectedRows } = await salveOnMemory('rmvTask', id); // await rmvTaskAPI(id);
    const newTasks = tasks.filter((t) => t.id !== id);
    if (affectedRows) setTasks(newTasks);
    return true;
  };

  const editTask = async (task) => {
    if (tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask && t.checked === task.checked)) return false;
    const { id } = await salveOnMemory('editTask', { ...task });// editTaskAPI({ ...task });
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    if (id == task.id) setTasks(newTasks);
    return true;
  };

  useEffect(() => {
    console.log('TaskProvide.useEffect(null): ', tasks);
  });

  return (
    <TaskContext.Provider value={{
      tasks, setTasks, addTask, editTask, rmvTask,
    }}
    >
      <>
        { children }
      </>
    </TaskContext.Provider>
  );
}
