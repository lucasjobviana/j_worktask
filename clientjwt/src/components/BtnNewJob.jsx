import React from 'react';
import FormNewJob from './FormNewJob';
import './BtnNewJob.css'
import iconeAdd from '../assets/icons/add24.ico'

const BtnNewJob = () => {

	const toggleForm = ({target}) => {
		target.nextSibling.classList.toggle('disabled');	
	}
	
	return (
		<div className='btn-new-job'>
			<button onClick={(element) => toggleForm(element)}><img className='icon' src={iconeAdd} /></button>
			<FormNewJob />
		</div>
	);
}

export default BtnNewJob;