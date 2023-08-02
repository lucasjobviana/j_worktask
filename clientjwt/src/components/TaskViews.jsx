import  React from 'react';
import TaskView from './TaskView';
import './BtnNewJob.css'

//import { TaskContext } from '../context' 

const TaskViews = ({taskViews,left = 0,tabs = []}) => {
	//const { tasks } = useContext(TaskContext);console.log(taskViews)
	
	return (
		<>
		{
			taskViews.map((t,index)=> <TaskView key={`taskView${index}`} task={t} left={left} tabs={tabs}/> )
		}

		</>
	);
}
//work={{ works.find((work) => work.id == w)}}
export default TaskViews;
//<TaskView task={t}