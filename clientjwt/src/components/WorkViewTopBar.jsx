import React from 'react';
import './WorkViewTopBar.css'
import iconeDel from '../assets/icons/del24.ico'
import iconClose from '../assets/icons/close24.ico'
import iconMin from '../assets/icons/min24.ico'
import iconEdit from '../assets/icons/edit24.ico'
import iconSave from '../assets/icons/save24.ico'
 

const WorkViewTopBar = ({name}) => {
	
	const closeView = (event) => {
		console.log('closeView')
		console.log(event.target)			
		event.target.parentNode.parentNode.style.display = 'none';
		// event.target.parentNode.parentNode.remove();
		// rmvWorkView()

	}
	
	const minimizeView = (event) => {
		console.log('minimizeView')
		console.log(event.target)			
	}
	
	const editWork = (event) => {
		console.log('editWork')
		console.log(event.target)			
	}
	
	const deleteWork = (event) => {
		console.log('deleteWork')
		console.log(event.target)
	}

	const toggleView = ({target}) => {
		console.log('toogle');
		console.log(target);
		target.nextSibling.style.display = target.nextSibling.style.display === 'block' ? 'none' : 'block';
	}
	
	return (
		<button className='top-bar' onClick={toggleView}>
			<img src={iconClose} onClick={closeView} />
			<img src={iconMin} onClick={minimizeView}  />
			<img src={iconeDel} onClick={(event)=>deleteWork(event)} />
			<img src={iconEdit} onClick={(event)=>editWork(event)} />	
			<img src={iconSave} onClick={()=>alert('salvar')} />	
			<div className='icon' > <h4 >{name}</h4></div>
			
		</button>
	);
}

export default WorkViewTopBar;