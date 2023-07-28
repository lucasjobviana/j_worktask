import React, { useState } from 'react';
import { ControlPanelContext } from './';

export default function ControlPanelProvider({ children }) {
  const [filterBy, setFilterBy] = useState('work');
  const [workViews, setWorkViews] = useState([]);
  
  const addWorkView = (workView) => {
  	if(workViews.find((w) => w === workView)) return false;
		setWorkViews([...workViews, workView ]);
		return true
  }

  return (
    <ControlPanelContext.Provider value={{ setFilterBy, filterBy, workViews, addWorkView }}>
      <div className="Control-panel-context">
        { children }
      </div>
    </ControlPanelContext.Provider>
  );

}