import React, { useState, useEffect } from 'react';
import { TaskContext } from './';
import { addTaskAPI, editTaskAPI, rmvTaskAPI} from '../api/taskAPI ';

export default function TaskProvider({ children }) { 
  const [tasks, setTasks] = useState([]);
 
  const addTask = async (task) => { 
    if(tasks.find((t) => t.name === 'semNadaDeResticao')) return false;
    const {id} = await addTaskAPI({ id: 0, ...task });
    if(id) {setTasks([ ...tasks, { id: id, ...task } ]);}

	//alert('achei nova tarefa');
    return true
  }

  const rmvTask = async (id) => { 
    if(!tasks.find((t) => t.id == id)) return false;
    const {affectedRows} = await rmvTaskAPI(id);//fdsahfdjkshfdskafdskjfhadskjfhkjsd
   // if(affectedRows) {setTasks([ ...tasks, { id: id, ...task } ]);}

	//alert('achei nova tarefa');
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
    if(id == task.id) {setTasks(newTasks);}else{alert('efjklds');}
    return true
  }






    
	// 	console.log('TaskProvider.useEffect(atualizei tasks): ',tasks);
  //   const newTarefaElements = document.querySelectorAll('input[value="Nova Tarefa"]');
    
  //   const newTarefaElement = newTarefaElements&& newTarefaElements.length > 0 ? newTarefaElements[0] : null;
  //   // newTarefaElement.focus();
  //   if (newTarefaElement) {
  //     console.log(newTarefaElement)
  //     newTarefaElement.focus();
  //   } else {
  //     console.log('Elemento não encontrado ou não há elementos com value="Nova Tarefa".');
  //   }

	// },[tasks]);  

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, editTask, rmvTask }}>
      <>
        { children }
      </>
    </TaskContext.Provider>
  );

}