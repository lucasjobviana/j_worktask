import React, { useState, useMemo } from 'react';
import { StatusTaskContext } from '.';

export default function StatusTaskProvider({ children }) {
  const [statusTask, setStatusTask] = useState([]);

  const contextValue = useMemo(() => ({
    statusTask,
    setStatusTask,
  }), [statusTask, setStatusTask]);

  return (
    <StatusTaskContext.Provider value={contextValue}>
      { children }
    </StatusTaskContext.Provider>
  );
}
