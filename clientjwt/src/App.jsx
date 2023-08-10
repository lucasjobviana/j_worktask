import React, { useEffect, useContext } from 'react';
// import ControlPanelProvider from './context/ControlPanelProvider'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ControlPanel from './pages/ControlPanel';
import { getWorksAPI } from './api/workAPI';
import { getTasksAPI } from './api/taskAPI ';
import useStorage from './tools/hook/useStorage';
// import mockWorks from '../tests/mocks/works'
// import mockTasks from '../tests/mocks/tasks'
// import mockStatusTask from '../tests/mocks/statusTask'
import {
  WorkContext, TaskContext, StatusTaskContext, ControlPanelContext,
} from './context';
import './App.css';

function App() {
  const salveOnMemory = useStorage();

  const { tasks, setTasks } = useContext(TaskContext);
  const { works, setWorks } = useContext(WorkContext);
  const { workViews } = useContext(ControlPanelContext);
  const { statusTask } = useContext(StatusTaskContext);
  // const salveOnMemory = useStorage();
  // console.log(salveOnMemory('getWorks', 1));

  const setContextApp = async (userId) => {
    const workList = await salveOnMemory('getWorks', userId);// getWorksAPI(userId)
    const taskList = await salveOnMemory('getTasks', userId);// getTasksAPI(userId);

    if (workList) {
      setWorks(workList);
    }
    if (taskList) {
      setTasks(taskList);
    }
  };

  useEffect(() => {
    const userId = 1;
    console.log('App.useEffect([])[works]: ', works);
    console.log('App.useEffect([])][tasks]: ', tasks);
    console.log('App.useEffect([])][tasks]: ', statusTask);
    !localStorage.getItem('works') && localStorage.setItem('works', JSON.stringify([]));
    !localStorage.getItem('tasks') && localStorage.setItem('tasks', JSON.stringify([]));
    setContextApp(userId);
  }, [workViews]);

  return (
    <Switch>

      <Route exact path="/" component={ControlPanel} />

    </Switch>
  );
}

export default App;
