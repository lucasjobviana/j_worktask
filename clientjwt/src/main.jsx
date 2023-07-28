import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import WorkProvider from './context/WorkProvider'
import TaskProvider from './context/TaskProvider'
import StatusTaskProvider from './context/StatusTaskProvider'
import StatusWorkProvider from './context/StatusWorkProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<WorkProvider>
		<TaskProvider>
		<StatusTaskProvider>
		<StatusWorkProvider>
			<App />
		</StatusWorkProvider>
		</StatusTaskProvider>
		</TaskProvider>
		</WorkProvider>
  </BrowserRouter>,
)
