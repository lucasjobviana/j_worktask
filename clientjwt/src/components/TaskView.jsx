import React, { useContext, useState } from 'react';
import { TaskContext } from '../context';
import TaskViews from './TaskViews'
import iconeAdd from '../assets/icons/add24.ico'
import iconDel from '../assets/icons/del24.ico'
import iconCheck from '../assets/icons/check24.ico' 
import iconEdit from '../assets/icons/edit24.ico' 
import './TaskView.css'

const TaskView = ({ task, left=0, tabs = [] }) => { 
  const { tasks, addTask, editTask } = useContext(TaskContext);
  const [ nameText, setNameText ] = useState(task.name);
  const subTasks = tasks.filter((t) => t.idParentTask === task.id);
  const subTaskElements =  <TaskViews taskViews={ subTasks } left={left+5} tabs={[...tabs,true]} /> 
  const tabElements =  tabs.map(()=> {return '   '}).join('')

  const addNewTask = (event,id,idWork) => {
   event.preventDefault();
    //alert(`${id}`)
    console.log(event.target) 
    addTask({ name: 'novaTarefa', descrition:'novaDescrition', idParentTask:id, idWork:idWork});
		// const { target: { form : { nameNewJob } }  } = event;
		// const { target: { form : { descNewJob } }  } = event; 
		// addWork({ name: nameNewJob.value, descrition:descNewJob.value})
		// nameNewJob.value = '';
		// descNewJob.value = '';
		// setIsValidDescrition(false);
  }

  const editNewTask = (event, {id,idWork,idParentTask}) => {
    event.preventDefault();
    console.log(event.target) 
    //criar formulario 
    editTask({ name: 'novoTarefa edit', descrition:'descrition edit', idWork, id, idParentTask});
  }

  const showDescrition = (id) => {
    alert(id)
    const trElement = document.getElementById(id);
    trElement?.nextElementSibling?.classList.toggle('disabled');
  }

  const handleChange = ({target}) => {
    setNameText(target.value)
  }
//onFocus={()=>showDescrition(`task-view-${task.id}`)}
  return (
  <>
    <tr className={`task-view`}   id={`task-view-${task.id}`}>
      <td className='span-name'>{` ${tabElements}*` } <input className='td-editable' onInput={handleChange}   type='text' value={`${nameText}`} />  </td>
      <td><img style={{background:'red'}} src={iconCheck}  /> </td>
      <td> <button  onClick={(e) => addNewTask(e,task.id,task.idWork)} ><img className='icon' src={iconeAdd}  /></button> </td>
      <td><button><img  className='icon' src={iconDel}  /></button></td>  
      <td><button onClick={(e) => editNewTask(e,task)}><img  className='icon' src={iconEdit}  /></button></td> 
      <td className='span-descrition'>{task.descrition}</td>
    </tr>
    <tr className='span-outro'><td>{` ${tabElements}  ` } <input className='td-editable' type='text' value={` ${task.descrition}  `} />  </td></tr>  
    {subTaskElements}
    </>
  );
}

export default TaskView;
// style={{position:'relative',left:`${left}%`}}