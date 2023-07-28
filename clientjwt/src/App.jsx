import React, { useEffect, useContext } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import TaskProvider from './context/TaskProvider'
import ControlPanelProvider from './context/ControlPanelProvider'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import ControlPanel from './pages/ControlPanel'
import mockWorks from '../tests/mocks/works'
import mockTasks from '../tests/mocks/tasks'
import mockStatusTask from '../tests/mocks/statusTask'
import { WorkContext, TaskContext, StatusTaskContext } from './context'
import './App.css'


function App() {
	const { tasks, setTasks } = useContext(TaskContext);
	const { works, setWorks } = useContext(WorkContext);
	const { statusTask, setStatusTask } = useContext(StatusTaskContext);
	
	
	useEffect(()=>{
		console.log('App.useEffect([])[works]: ',works);
		console.log('App.useEffect([])][tasks]: ', tasks);
		console.log('App.useEffect([])][tasks]: ', statusTask);
		setWorks(mockWorks);
		setTasks(mockTasks);
		setStatusTask(mockStatusTask);
	},[]);
	
  return (
    <>
	<Switch>
	<ControlPanelProvider>
		<Route exact path='/' component={ControlPanel} ></Route>
	</ControlPanelProvider>
	</Switch>
    </>
  )
}

export default App
