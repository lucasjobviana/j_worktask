import React, { useState, useMemo } from 'react';
import { StatusWorkContext } from '.';

export default function StatusTaskProvider({ children }) {
  const [statusWork, setStatusWork] = useState([]);

  const contextValue = useMemo(() => ({
    statusWork,
    setStatusWork,
  }), [statusWork, setStatusWork]);

  return (
    <StatusWorkContext.Provider value={contextValue}>
      { children }
    </StatusWorkContext.Provider>
  );
}
