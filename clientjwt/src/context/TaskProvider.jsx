import React, { useState, useEffect } from 'react';
import { TaskContext } from './';
import { addTaskAPI, editTaskAPI} from '../api/taskAPI ';

export default function TaskProvider({ children }) { 
  const [tasks, setTasks] = useState([]);
   
  const addTask = async (task) => { 
    if(tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask)) return false;
    const {id} = await addTaskAPI({ id: 0, ...task });
    if(id) {setTasks([ ...tasks, { id: id, ...task } ]);}
    return true
  }

  const editTask = async (task) => { 
    if(tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask)) return false;
    const {id} = await editTaskAPI({ ...task });
    const newTasks = tasks.map((t)=>{
      if (t.id === task.id){
        return task;
      }
      return t;
    });
    if(id == task.id) {setTasks(newTasks);}else{alert('efjklds');}
    return true
  }
	
	useEffect(()=>{
		console.log('TaskProvider.useEffect(null): ',tasks)
	});  

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, editTask }}>
      <>
        { children }
      </>
    </TaskContext.Provider>
  );

}