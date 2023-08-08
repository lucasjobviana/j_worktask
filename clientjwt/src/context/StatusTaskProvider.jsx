import React, { useState, useEffect } from 'react';
import { StatusTaskContext } from '.';

export default function StatusTaskProvider({ children }) {
  const [statusTask, setStatusTask] = useState([]);
  useEffect(() => {
    console.log('StatusTaskProvider.useEffect(null): ', statusTask);
  });

  return (
    <StatusTaskContext.Provider value={{ statusTask, setStatusTask }}>
      { children }
    </StatusTaskContext.Provider>
  );
}
