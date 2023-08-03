import React, { useContext, useState } from 'react';
import { TaskContext } from '../context';
import TaskViews from './TaskViews'
import iconeAdd from '../assets/icons/add24.ico'
import iconDel from '../assets/icons/del24.ico'
import iconCheck from '../assets/icons/check24.ico' 
import iconClose from '../assets/icons/arrowUp24.ico' 
import iconEdit from '../assets/icons/edit24.ico' 
import iconSave from '../assets/icons/save24.ico' 
import './TaskView.css'

const TaskView = ({ task, left=0, tabs = [] }) => { 
  const { tasks, addTask, editTask } = useContext(TaskContext);
  const [ nameText, setNameText ] = useState(task.name);
  const [ descritionText, setDescritionText ] = useState(task.descrition);
  const [ editBtnIcon, setEditBtnIcon ] = useState(true);
  const subTasks = tasks.filter((t) => t.idParentTask === task.id);
  const subTaskElements =  <TaskViews taskViews={ subTasks } left={left+5} tabs={[...tabs,true]} /> 
  const tabElements =  tabs.map(()=> {return '   '}).join('')

  const addNewTask = (event,id,idWork) => {
    event.preventDefault();
    addTask({ name: 'novaTarefa', descrition:'novaDescrition', idParentTask:id, idWork:idWork});
  }

  const editTaskHandle = async (event, {id,idWork,idParentTask,name,descrition},idElement) => {
    event.preventDefault();
    await editTask({ name: nameText, descrition:descritionText, idWork, id, idParentTask}) && toogleEditable(idElement);
  }

  const toogleEditable = (id) => {
    const trElement = document.getElementById(id);
    trElement?.nextElementSibling?.classList.toggle('disabled');
    setEditBtnIcon(!editBtnIcon);
  }

  const handleChangeName = ({target}) => {
    setNameText(target.value)
  }
  const handleChangeDescrition = ({target}) => {
    setDescritionText(target.value)
  }
 
  return (
  <>
    <tr className={`task-view`}   id={`task-view-${task.id}`}>
      <td className='span-name'>{` ${tabElements}*` } <input disabled={editBtnIcon}  className='td-editable' onInput={handleChangeName}   type='text' value={`${nameText}`} />  </td>
      <td><img style={{background:'red'}} src={iconCheck}  /> </td>
      <td> <button  onClick={(e) => addNewTask(e,task.id,task.idWork)} ><img className='icon' src={iconeAdd}  /></button> </td>
      <td><button><img  className='icon' src={iconDel}  /></button></td>  
      <td><button onClick={(e) => toogleEditable(`task-view-${task.id}`)}><img  className='icon' src={editBtnIcon?iconEdit:iconClose}  /></button></td> 
      <td className='span-descrition'>{task.descrition}</td>
    </tr>
    <tr className='disabled' ><td>{` ${tabElements}  ` } <input className='td-editable' type='text' onInput={handleChangeDescrition} value={`${descritionText}`} />  </td><td></td><td></td><td></td><td><button onClick={(e)=>editTaskHandle(e,task,`task-view-${task.id}`)}><img className='icon' src={iconSave}  /></button></td></tr>  
    {subTaskElements}
    </>
  );
}

export default TaskView; 