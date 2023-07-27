import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskProvider from './context/TaskProvider'
import { Switch, Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import ControlPanel from './pages/ControlPanel'
import './App.css'


function App() {
  return (
    <>
      <TaskProvider>
		     <Switch>
		       <Route exact path='/' component={ControlPanel} ></Route>
		     </Switch>
      </TaskProvider>
    </>
  )
}

export default App
