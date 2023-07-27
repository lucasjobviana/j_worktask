import React, { useState } from 'react';

import TaskContext from './TaskContext';


export default function TaskProvider({ children }) {

  const [themeColor, setThemeColor] = useState('dark');


  function toggleTheme() {

    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');

  }


  return (

    <TaskContext.Provider value={{ color: themeColor, toggleTheme }}>

      <div className={ themeColor }>

        { children }

      </div>

    </TaskContext.Provider>

  );

}