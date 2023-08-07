import React,{useContext} from 'react';
import './WorkViewTopBar.css'
import iconeDel from '../assets/icons/del24.ico'
import iconClose from '../assets/icons/close24.ico'
import iconMin from '../assets/icons/min24.ico'
import iconEdit from '../assets/icons/edit24.ico'
import iconSave from '../assets/icons/save24.ico'
import iconAdd from '../assets/icons/add24.ico'
import { TaskContext, WorkContext } from '../context';
 

const WorkViewTopBar = ({name,id}) => {
	const { tasks, addTask, rmvTask } = useContext(TaskContext);
	const { works, rmvWork } = useContext(WorkContext);
	
	const closeView = (event) => {
		console.log('closeView')
		console.log(event.target)			
		event.target.parentNode.parentNode.style.display = 'none';
		// event.target.parentNode.parentNode.remove();
		// rmvWorkView()

	}
	
	const minimizeView = (event) => {
		console.log('minimizeView')
		console.log(event.target)			
	}
	
	const editWork = (event) => {
		console.log('editWork')
		console.log(event.target)			
	}
	
	
	const deleteWork = async (event) => {
		console.log('deleteWork')
		event.preventDefault();
		const a = await rmvWork(id);//
		window.location.reload();
		console.log(a,works);

		
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
			<img src={iconEdit} onClick={(event)=>editWork(event)} />	
			<img src={iconSave} onClick={()=>alert('salvar')} />	
			<img src={iconAdd} onClick={(event)=>addNewTask(event,null,id)} />	
			<div className='icon' > <h4 >{name}</h4></div>
			
		</div>
	);
}

export default WorkViewTopBar;