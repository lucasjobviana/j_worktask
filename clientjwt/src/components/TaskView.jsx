import React, { useContext } from 'react';
import { TaskContext } from '../context';
import TaskViews from './TaskViews'
import iconeAdd from '../assets/icons/add24.ico'
import iconDel from '../assets/icons/del24.ico'
import iconCheck from '../assets/icons/check24.ico' 
import './TaskView.css'

const TaskView = ({ task, left=0, tabs = [] }) => { 
  const { tasks, addTask } = useContext(TaskContext);
  const subTasks = tasks.filter((t) => t.idParentTask === task.id);
  const subTaskElements =  <TaskViews taskViews={ subTasks } left={left+5} tabs={[...tabs,true]} /> 
  const tabElements =  tabs.map(()=> {return '   '}).join('')

  const addNewTask = (event,id,idWork) => {
   event.preventDefault();
    alert(`${id}`)
    console.log(event.target) 
    addTask({ name: 'novaTarefa', descrition:'novaDescrition', idParentTask:id, idWork:idWork});
		// const { target: { form : { nameNewJob } }  } = event;
		// const { target: { form : { descNewJob } }  } = event; 
		// addWork({ name: nameNewJob.value, descrition:descNewJob.value})
		// nameNewJob.value = '';
		// descNewJob.value = '';
		// setIsValidDescrition(false);
  }

  return (
  <>
    <tr className={`task-view`}   id={`task-view-${task.id}`}>
      <td className='span-name'>{` ${tabElements}* ${task.name}  `}</td>
      <td><img style={{background:'red'}} src={iconCheck}  /> </td>
      <td> <button  onClick={(e) => addNewTask(e,task.id,task.idWork)} ><img className='icon' src={iconeAdd}  /></button> </td>
      <td><button><img  className='icon' src={iconDel}  /></button></td>
      <td className='span-descrition'>{task.descrition}</td>
      
      
    </tr>
    {subTaskElements}
    </>
  );
}

export default TaskView;
// style={{position:'relative',left:`${left}%`}}