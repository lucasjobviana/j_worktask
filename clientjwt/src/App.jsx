/* eslint-disable no-unused-expressions */
import './App.css';
import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ControlPanel from './pages/ControlPanel';
import useStorage from './tools/hook/useStorage';

import {
  WorkContext, TaskContext,
} from './context';

function App() {
  const saveToSelectedStorage = useStorage();
  const { setTasks } = useContext(TaskContext);
  const { setWorks } = useContext(WorkContext);

  const setContextApp = async (userId) => {
    const workList = await saveToSelectedStorage('getWorks', userId);
    const taskList = await saveToSelectedStorage('getTasks', userId);
    workList && setWorks(workList);
    taskList && setTasks(taskList);
  };

  useEffect(() => {
    const userId = 1;
    !localStorage.getItem('works') && localStorage.setItem('works', JSON.stringify([]));
    !localStorage.getItem('tasks') && localStorage.setItem('tasks', JSON.stringify([]));
    setContextApp(userId);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={ControlPanel} />
    </Switch>
  );
}

export default App;
