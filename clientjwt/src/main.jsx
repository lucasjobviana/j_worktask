import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
import App from './App.jsx';
import WorkProvider from './context/WorkProvider';
import TaskProvider from './context/TaskProvider';
import StatusTaskProvider from './context/StatusTaskProvider';
import StatusWorkProvider from './context/StatusWorkProvider';
import ControlPanelProvider from './context/ControlPanelProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename="/" >
    <ControlPanelProvider>
      <TaskProvider>
        <WorkProvider>
          <StatusTaskProvider>
            <StatusWorkProvider>
              <App />
            </StatusWorkProvider>
          </StatusTaskProvider>
        </WorkProvider>
      </TaskProvider>
    </ControlPanelProvider>
  </HashRouter>,
);
