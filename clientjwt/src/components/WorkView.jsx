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
	// const [ divWasCreated, setDivWasCreated] = useState(false);
	const { tasks } = useContext(TaskContext);
	
	useEffect(() => {
		 divRef.current.focus();
	},[]);	
	
	console.log(work)
	console.log(tasks)
	const tasksOfWork = tasks.filter((t)=>(t.idWork === work.id && t.idParentTask ===null));
	console.log(tasksOfWork)
	console.log('fsdfasdfdsfdsfdsfds')
	// const tasksElements = tasksOfWork.map((t) => <div >{t.name}</div>)
	
	return (
		<div ref={divRef} tabIndex={0} className='work-view' id={`work-view${work.id}`} >
			<WorkViewTopBar />
			
			<h2>{`${work.id} - ${work.name}`}</h2>
			<h3> {work.descrition}</h3>
			
			<div className='tableContainer'>
			<table className='task-views'><TaskViews taskViews={ tasksOfWork } /></table>
			</div>
		</div>
	);
}

export default WorkView;