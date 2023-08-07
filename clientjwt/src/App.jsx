import React, { useEffect, useContext } from 'react'
import ControlPanelProvider from './context/ControlPanelProvider'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import ControlPanel from './pages/ControlPanel'
import { getWorksAPI } from './api/workAPI'
import { getTasksAPI } from './api/taskAPI '
// import mockWorks from '../tests/mocks/works'
// import mockTasks from '../tests/mocks/tasks'
// import mockStatusTask from '../tests/mocks/statusTask'
import { WorkContext, TaskContext, StatusTaskContext, ControlPanelContext } from './context'
import './App.css'
 
 
function App() {
	const { tasks, setTasks } = useContext(TaskContext);
	const { works, setWorks } = useContext(WorkContext);
	const { workViews } = useContext(ControlPanelContext);
	const { statusTask } = useContext(StatusTaskContext);

	const setContextApp = async (userId) => {
		const works = await getWorksAPI(userId);
		const tasks = await getTasksAPI(userId);
 
		if(works){
			setWorks(works);
		}
		if(tasks){
			setTasks(tasks);
		}
	}

	useEffect(()=>{
		const userId = 1;
		console.log('App.useEffect([])[works]: ',works);
		console.log('App.useEffect([])][tasks]: ', tasks);
		console.log('App.useEffect([])][tasks]: ', statusTask);
		setContextApp(userId);
	},[workViews]);

 

 
	
  return (
    <>
	<Switch>
	
		<Route exact path='/' component={ControlPanel} ></Route>
	
	</Switch>
    </>
  )
}

export default App
