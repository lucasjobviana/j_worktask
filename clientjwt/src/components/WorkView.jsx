import React, { useState, useRef, useEffect, useContext } from 'react';
import FormNewJob from './FormNewJob';
import './WorkView.css'
import iconeAdd from '../assets/icons/add24.ico'
import { ControlPanelContext, WorkContext, TaskContext } from '../context'
import TaskViews from './TaskViews'

const WorkView = ({work}) => {
	const divRef = useRef(null);
	const [ divWasCreated, setDivWasCreated] = useState(false);
	const { tasks } = useContext(TaskContext);
	
	useEffect(() => {
		 divRef.current.focus();
	},[]);	
	
	const tasksOfWork = tasks.filter((t)=>t.work === work.id);
	const tasksElements = tasksOfWork.map((t) => <div >{t.name}</div>)
	
	return (
		<div ref={divRef} tabIndex={0} className='work-view' id={`work-view${work.id}`} >
			<p>Id: {work.id}</p>
			<p>Nome: {work.name}</p>
			<p>Desc: {work.desc}</p>
			<div className='tableContainer'>
			<table className='task-views'><TaskViews taskViews={ tasksOfWork } /></table>
			</div>
		</div>
	);
}

export default WorkView;