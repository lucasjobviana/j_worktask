import React,{useContext} from 'react';
import './WorkViewTopBar.css'
import iconeDel from '../assets/icons/del24.ico'
import iconClose from '../assets/icons/close24.ico'
import iconEdit from '../assets/icons/edit24.ico'
import iconSave from '../assets/icons/save24.ico'
import iconAdd from '../assets/icons/add24.ico'
import { TaskContext, WorkContext } from '../context';
 

const WorkViewTopBar = ({name,id}) => {
	const {  addTask } = useContext(TaskContext);
	const {  rmvWork } = useContext(WorkContext);
	
	const closeView = (event) => {		
		event.target.parentNode.parentNode.style.display = 'none';

	}
	
	const editWork = (event) => {
		console.log('editWork')
		console.log(event.target)			
	}
	
	
	const deleteWork = async (event) => {
		event.preventDefault();
		await rmvWork(id);
	}

	const addNewTask = (event,id,idWork) => {
		event.preventDefault();
		addTask({ name: 'Nova Tarefa', descrition:'Nova Descrição', idParentTask:id, idWork:idWork});
	}

	const toggleView = ({target}) => {		 
		target.nextSibling.style.display = window.getComputedStyle(target.nextSibling).display === 'block' ? 'none' : 'block';
	}
	
	return (
		<div className='top-bar' onClick={toggleView}>
			<img src={iconClose} onClick={closeView} />
			<img src={iconeDel} onClick={(event)=>deleteWork(event)} />
			<img src={iconEdit} onClick={(event)=>editWork(event)} className='disabled' />	
			<img src={iconSave} onClick={()=>alert('salvar')} className='disabled' />	
			<img src={iconAdd} onClick={(event)=>addNewTask(event,null,id)} />	
			<div className='icon' > <h4 >{name}</h4></div>	
		</div>
	);
}

export default WorkViewTopBar;