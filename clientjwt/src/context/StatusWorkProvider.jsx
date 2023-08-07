import React,{ useState, useEffect } from 'react';
import { StatusWorkContext } from '.';

export default function StatusTaskProvider({ children }) {  
  const [statusWork, setStatusWork] = useState([]);
	useEffect(()=>{
		console.log('StatusWorkProvider.useEffect(null): ', statusWork);
	});  

  return (
    <StatusWorkContext.Provider value={{ statusWork, setStatusWork }}>
      <>
        { children }
      </>
    </StatusWorkContext.Provider>
  );
}