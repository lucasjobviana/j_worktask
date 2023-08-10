import React, { useContext } from 'react';
import { ControlPanelContext } from '../../context';
import {
  getWorksAPI, addWorkAPI, editWorkAPI, rmvWorkAPI,
} from '../../api/workAPI';
import {
  getTasksAPI, addTaskAPI, editTaskAPI, rmvTaskAPI,
} from '../../api/taskAPI ';

import {
  getWorksLS, addWorkLS, editWorkLS, rmvWorkLS,
} from '../../ls/workLS';
import {
  getTasksLS, addTaskLS, editTaskLS, rmvTaskLS,
} from '../../ls/taskLS ';

const useStorage = (initialValue = 0) => {
  const { usingBD } = useContext(ControlPanelContext);

  const mapFunctions = (functionName, functionParameter) => {
    if (usingBD) {
      switch (functionName) {
      case 'getWorks': return getWorksAPI(functionParameter);
      case 'addWork': return addWorkAPI(functionParameter);
      case 'editWork': return editWorkAPI(functionParameter);
      case 'rmvWork': return rmvWorkAPI(functionParameter);
      case 'getTasks': return getTasksAPI(functionParameter);
      case 'addTask': return addTaskAPI(functionParameter);
      case 'editTask': return editTaskAPI(functionParameter);
      case 'rmvTask': return rmvTaskAPI(functionParameter);
      default: return null;
      }
    }

    switch (functionName) {
    case 'getWorks': return getWorksLS(functionParameter);
    case 'addWork': { return addWorkLS(functionParameter); }
    case 'editWork': return editWorkLS(functionParameter);
    case 'rmvWork': return rmvWorkLS(functionParameter);
    case 'getTasks': return getTasksLS(functionParameter);
    case 'addTask': return addTaskLS(functionParameter);
    case 'editTask': return editTaskLS(functionParameter);
    case 'rmvTask': return rmvTaskLS(functionParameter);
    default: return null;
    }
  };

  return mapFunctions;
};

export default useStorage;
