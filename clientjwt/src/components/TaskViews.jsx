import React, { useContext } from 'react';
import FormNewJob from './FormNewJob';
import TaskView from './TaskView';
import './BtnNewJob.css'
import iconeAdd from '../assets/icons/add24.ico'
import { ControlPanelContext, TaskContext } from '../context'

const TaskViews = ({taskViews,left = 0}) => {
	const { tasks } = useContext(TaskContext);console.log(taskViews)
	
	return (
		<>
		
		{
			taskViews.map((t)=> <TaskView task={t} left={left}/> )
		}
		
		</>
	);
}
//work={{ works.find((work) => work.id == w)}}
export default TaskViews;
//<TaskView task={t}