import React, { useState, useEffect } from 'react';
import { TaskContext } from './';
import { addTaskAPI, editTaskAPI, rmvTaskAPI} from '../api/taskAPI ';

export default function TaskProvider({ children }) { 
  const [tasks, setTasks] = useState([]);
 
  const addTask = async (task) => { 
    if(tasks.find((t) => t.name === 'semNadaDeResticao')) return false;
    const {id} = await addTaskAPI({ id: 0, ...task });
    if(id) setTasks([ ...tasks, { id: id, ...task } ]);
    return true
  }

  const rmvTask = async (id) => { 
    if(!tasks.find((t) => t.id == id)) return false;
    const { affectedRows } = await rmvTaskAPI(id);
    const newTasks = tasks.filter((t)=>t.id !== id);
    if(affectedRows) setTasks(newTasks);
    return true
  }

  const editTask = async (task) => { 
    if(tasks.find((t) => t.name === task.name && t.idParentTask === task.idParentTask && t.checked === task.checked)) return false;
    const {id} = await editTaskAPI({ ...task });
    const newTasks = tasks.map((t)=>{
      if (t.id === task.id){
        return task;
      }
      return t;
    });
    if(id == task.id) setTasks(newTasks);
    return true
  }

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, editTask, rmvTask }}>
      <>
        { children }
      </>
    </TaskContext.Provider>
  );
}