import React from 'react';
import WorkProvider from '../../context/WorkProvider';
import TaskProvider from '../../context/TaskProvider';
import StatusTaskProvider from '../../context/StatusTaskProvider';
import StatusWorkProvider from '../../context/StatusWorkProvider';
import ControlPanelProvider from '../../context/ControlPanelProvider';
import App from '../../App';

function AppWithContexts() {
  return (

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

  );
}

export default AppWithContexts;
