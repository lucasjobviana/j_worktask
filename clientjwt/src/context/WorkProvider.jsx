import React, { useState, useEffect } from 'react';
import { WorkContext } from './';
import addWorkAPI from '../api/workAPI';

export default function WorkProvider({ children }) {
  const [works, setWorks] = useState([]);
  
  const addWork = async (work) => {
    if(works.find((w) => w.name === work.name)) return false;
    const workIds = works.map((w) => Number(w.id));
    const newId = Math.max(...workIds) + 1;
    const {id} = await addWorkAPI({ id: newId, ...work });
    if(id) {setWorks([ ...works, { id: id, ...work } ]);}
    //setWorks([ ...works, { id: newId, ...work } ]);//salvar no bd aqui
    return true
  }
	
	useEffect(()=>{
		console.log('WorkProvide.useEffect(null): ',works)
	});  

  return (
    <WorkContext.Provider value={{ works, setWorks, addWork }}>
      <>
        { children }
      </>
    </WorkContext.Provider>
  );

}