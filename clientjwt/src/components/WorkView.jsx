import React, {  useRef, useEffect, useContext } from 'react';
import WorkViewTopBar from './WorkViewTopBar';
import './WorkView.css'
import iconeDel from '../assets/icons/del24.ico'
import iconClose from '../assets/icons/close24.ico'
import iconMin from '../assets/icons/min24.ico'
import iconEdit from '../assets/icons/edit24.ico'
import {  TaskContext } from '../context'
import TaskViews from './TaskViews'

const WorkView = ({work}) => {  
	const divRef = useRef(null);
	const { tasks } = useContext(TaskContext);
	
	useEffect(() => {
		 divRef.current.focus();
	},[]);	

	const tasksOfWork = tasks.filter((t)=>(t.idWork === work.id && t.idParentTask ===null));
	
	return (
		<div ref={divRef} tabIndex={0} className='work-view' id={`work-view${work.id}`} >
			<WorkViewTopBar name={work.name} id={work.id}  />
			<div className='work-content'>
				<div>
					<input disabled={true}  className='td-editable'  type="text" value={`${work.id} - ${work.name}`} />
					<input disabled={true}  className='td-editable' value={work.descrition} type="text" /> 
				</div>
				
				<div className='tableContainer'>
					<table className='task-views'><tbody><TaskViews taskViews={ tasksOfWork } /></tbody></table>
				</div>
			</div>
		</div>
	);
}

export default WorkView;