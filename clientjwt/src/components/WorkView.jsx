import React, { useState, useRef, useEffect } from 'react';
import FormNewJob from './FormNewJob';
import './BtnNewJob.css'
import iconeAdd from '../assets/icons/add24.ico'
import { ControlPanelContext, WorkContext } from '../context'

const WorkView = ({work}) => {
	console.log('jksadlfdlkjlfdjskl',work)
	const divRef = useRef(null);
	const [ divWasCreated, setDivWasCreated] = useState(false);
	
	useEffect(() => {
		 divRef.current.focus();
	},[]);	
	
	return (
		<div ref={divRef} tabIndex={0} className='work-view' id={`work-view${work.id}`} >
			<p>Id: {work.id}</p>
			<p>Nome: {work.name}</p>
			<p>Desc: {work.desc}</p>
		</div>
	);
}

export default WorkView;