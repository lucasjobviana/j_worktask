import { useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskProvider from './context/TaskProvider'
import ControlPanelProvider from './context/ControlPanelProvider'
import { Switch, Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import ControlPanel from './pages/ControlPanel'
import mockWorks from '../tests/mocks/works'
import { WorkContext } from './context'
import './App.css'


function App() {
	const { works, setWorks } = useContext(WorkContext);
	useEffect(()=>{
		console.log('App.useEffect([]):', works);
		setWorks(mockWorks);
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
