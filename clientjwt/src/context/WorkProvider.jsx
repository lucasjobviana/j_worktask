import React, { useState, useEffect, useContext } from 'react';
import { WorkContext,ControlPanelContext, TaskContext } from './';
import {addWorkAPI,rmvWorkAPI} from '../api/workAPI';

export default function WorkProvider({ children }) {
  const [works, setWorks] = useState([]);
  const {rmvWorkView} = useContext(ControlPanelContext);
  // const { tasks, addTask, editTask, rmvTask } = useContext(TaskContext);
   
  // const [ tasks, setTasks ] = useContext(TaskContext);
  const { tasks, setTasks } = useContext(TaskContext)
  //const { works, setWorks } = useContext(WorkContext)
  
  const addWork = async (work) => {
    if(works.find((w) => w.name === work.name)) return false;
    const workIds = works.map((w) => Number(w.id));
    const newId = Math.max(...workIds) + 1;
    const {id} = await addWorkAPI({ id: newId, ...work });
    if(id) {setWorks([ ...works, { id: id, ...work } ]);}
    //setWorks([ ...works, { id: newId, ...work } ]);//salvar no bd aqui
    return true
  }

  const rmvWork = async (id) => { 
    if(!works.find((t) => t.id == id)) return false;
    const {affectedRows} = await rmvWorkAPI(id);//fdsahfdjkshfdskafdskjfhadskjfhkjsd
    const newWorks = works.filter((t)=>t.id !== id);
    console.log(newWorks)
    if(affectedRows){ 
      console.log('if affectrow=',affectedRows);
      const newTasks = tasks.filter((t)=> t.idWork !== id);
      
      //setWorks(newWorks);
      //setTasks(newTasks);
      rmvWorkView(id);
      
    }
    else{console.log('ekse');}

	//alert('achei nova tarefa');
    return true
  }
	
	useEffect(()=>{
		console.log('WorkProvide.useEffect(null): ',works)
	});  

  return (
    <WorkContext.Provider value={{ works, setWorks, addWork, rmvWork }}>
      <>
        { children }
      </>
    </WorkContext.Provider>
  );

}