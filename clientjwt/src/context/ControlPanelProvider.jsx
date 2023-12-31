import React, { useState, useMemo } from 'react';
import { ControlPanelContext } from '.';

export default function ControlPanelProvider({ children }) {
  const [filterBy, setFilterBy] = useState('work');
  const [workViews, setWorkViews] = useState([]);
  const usingBD = false;

  const addWorkView = (workView) => {
    if (workViews.find((w) => w === workView)) return false;
    setWorkViews([...workViews, workView]);
    return true;
  };

  const rmvWorkView = (workView) => {
    // if(workViews.find((w) => w === workView)) return false;//para validar
    const newWorkViewList = workViews.filter((w) => w !== workView);
    setWorkViews(newWorkViewList);
    return true;
  };

  const contextValue = useMemo(() => ({
    setFilterBy,
    filterBy,
    workViews,
    addWorkView,
    rmvWorkView,
    usingBD,
  }), [setFilterBy, filterBy, workViews, addWorkView, rmvWorkView, usingBD]);

  return (
    <ControlPanelContext.Provider value={contextValue}>
      { children }
    </ControlPanelContext.Provider>
  );
}
