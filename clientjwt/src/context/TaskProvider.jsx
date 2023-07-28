import React, { useState, useEffect } from 'react';
import { TaskContext } from './';

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    if(tasks.find((t) => t.name === task.name)) return false;
    const taskIds = tasks.map((t) => Number(t.id));
    const newId = Math.max(...taskIds) + 1;
    setTasks([ ...tasks, { id: newId, ...task } ]);//salvar no bd aqui
    return true
  }
	
	useEffect(()=>{
		console.log('TaskProvider.useEffect(null): ',tasks)
	});  

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask }}>
      <div className="task-context">
        { children }
      </div>
    </TaskContext.Provider>
  );

}