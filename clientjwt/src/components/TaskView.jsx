import React, { useContext } from 'react';
import { TaskContext } from '../context';
import TaskViews from './TaskViews'
import './TaskView.css'

const TaskView = ({ task, left=0 }) => {
  const { tasks } = useContext(TaskContext);
  const subTasks = tasks.filter((t) => t.parentTask === task.id);
  const subTaskElements =  <TaskViews taskViews={ subTasks } left={left+5} /> 

  return (
  <>
    <tr className={`task-view`} style={{position:'relative',left:`${left}%`}}  id={`task-view-${task.id}`}>
    
      <td className='span-name'>{task.name}</td>
      <td><input type='checkbox' /> </td>
      <td className='span-descrition'>{task.desc}</td>
      
    </tr>
    {subTaskElements}
    </>
  );
}

export default TaskView;
// 