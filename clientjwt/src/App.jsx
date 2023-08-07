import React, { useEffect, useContext } from 'react'
import ControlPanelProvider from './context/ControlPanelProvider'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import ControlPanel from './pages/ControlPanel'
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
	
	const getWorksFromAPI = async (userId) => {
		const token = 'tokenaleatorio';
		try {
			const user = { id:1};
			const requestOptions = {method:'GET',headers:{
				'Authorization': `${token}`,
				'Content-Type': 'application/json'
			}}
			const response = await fetch('http://172.20.0.11:3000/works',requestOptions);
			if (!response.ok) {
			  throw new Error('Erro ao obter os dados da API.');
			}
		
			const data = await response.json();
			console.log('Dados recebidos:', data);
			return data; 
		  } catch (error) {
			console.error('Erro durante a requisição:', error);
			console.log(error);
			return null;
		  }
	}

	const getTasksFromAPI = async (userId) => {
		const token = 'tokenaleatorio';
		try {
			const user = { id:1};
			const requestOptions = {method:'GET',headers:{
				'Authorization': `${token}`,
				'Content-Type': 'application/json'
			}}

			const response = await fetch('http://172.20.0.11:3000/tasks',requestOptions);
			if (!response.ok) {
			  throw new Error('Erro ao obter os dados da API.');
			}
		
			const data = await response.json();
			console.log('Dados recebidos:', data);
			return data; 
		  } catch (error) {
			console.error('Erro durante a requisição:', error);
			console.log(error);
			return null;
		  }
	}

	const setContextApp = async (userId) => {
		const works = await getWorksFromAPI(userId);
		const tasks = await getTasksFromAPI(userId);
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
