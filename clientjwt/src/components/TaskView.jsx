import React, { useContext, useState, useRef, useEffect } from 'react';
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
  const { tasks, addTask, editTask, rmvTask } = useContext(TaskContext);
  const [ nameText, setNameText ] = useState(task.name);
  const [ descritionText, setDescritionText ] = useState(task.descrition);
  const [ check, setCheck ] = useState(task.checked||3);
  const [ editBtnIcon, setEditBtnIcon ] = useState(true);
  const subTasks = tasks.filter((t) => t.idParentTask === task.id);
  const subTaskElements =  <TaskViews taskViews={ subTasks } left={left+5} tabs={[...tabs,true]} /> 
  const tabElements =  tabs.map(()=> {return  '   '}).join('');
  const newTarefaElement = useRef(null);


  const handleRmvTask = async (event,id) => {
    event.preventDefault();
    console.log('hadleRemove',id)
    const a = await rmvTask(id);
    console.log(a)

  }

  const addNewTask = (event,id,idWork) => {
    event.preventDefault();
    addTask({ name: 'Nova Tarefa', descrition:'Nova Descrição', idParentTask:id, idWork:idWork});
  }

  const editTaskHandle = async (event, {id,idWork,idParentTask },idElement) => {
    event.preventDefault();
    await editTask({ name: nameText, descrition:descritionText, idWork, id, idParentTask, checked:check}) && toogleEditable(idElement);
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

  const handleChangeCheck = ({target}) => {
    const checked = target.checked === true ? 4: 3; 
    // alert(checked)
    setCheck(checked)
  }

  useEffect(() => {
    if (newTarefaElement.current.value === 'Nova Tarefa') {
      newTarefaElement.current.parentElement.style.opacity = '0.7';
    } 
  }, []);
  
  return (
  <>
    <tr className={`task-view`}   id={`task-view-${task.id}`}>
      <td>{`${tabElements}` }<input type="checkbox" checked={Number(check) ===4 } onChange={handleChangeCheck} /> </td>
      <td className='span-name'>  
        <input ref={newTarefaElement}  disabled={editBtnIcon}  className='td-editable' onInput={handleChangeName}   type='text' value={`${nameText}`} onChange={handleChangeName} />  
      </td>
      
      <td> 
        <button  onClick={(e) => addNewTask(e,task.id,task.idWork)} >
          <img className='icon' src={iconeAdd}  />
        </button> 
      </td>
      <td>
        <button onClick={(event)=>handleRmvTask(event,task.id)}>
          <img  className='icon' src={iconDel}  />
        </button>
      </td>  
      <td>
        <button onClick={() => toogleEditable(`task-view-${task.id}`)}>
           <img className='icon' src={editBtnIcon?iconEdit:iconClose} alt="a" />  
           </button>
      </td> 
      <div className='span-descrition'>{task.descrition}</div>
    </tr>

    <tr className='qualquer disabled' >
      <td></td>
      <td  >
      <input className='td-editable' type='text' onInput={handleChangeDescrition} value={`${descritionText}`} />  

       
       
      </td>
      
     
      <td>
        <button onClick={(e)=>editTaskHandle(e,task,`task-view-${task.id}`)}>
          <img className='icon' src={iconSave}  />
        </button>
      </td>
    </tr>

    {subTaskElements}
    </>
  );
}

export default TaskView; 