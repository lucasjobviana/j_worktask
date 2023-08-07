import  React from 'react';
import TaskView from './TaskView';
import './BtnNewJob.css'

const TaskViews = ({taskViews,left = 0,tabs = []}) => {
	return (
		<>
		{
			taskViews.map((t,index)=> <TaskView key={`taskView${index}`} task={t} left={left} tabs={tabs}/> )
		}
		</>
	);
}

export default TaskViews;
