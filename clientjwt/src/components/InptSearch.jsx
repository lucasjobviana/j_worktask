import React, { useContext } from 'react';
import { ControlPanelContext } from '../context'
// import FormNewJob from './FormNewJob';
import SearchFilters from './SearchFilters'
import './InptSearch.css'
import icone from '../assets/icons/search24.ico'
import iconeMenu from '../assets/icons/filter24.ico'

const InptSearch = () => {
	const { filterBy } = useContext(ControlPanelContext)

	const toggleSearch = ({target}) => {
		target.nextSibling.classList.toggle('disabled');	
	}
	
	const handleClick = ({target}) => {
		//const filterTypeElement = target.parentNode.querySelector('input[name="filterType"]:checked');
		
		console.log(target,filterBy)
	}
	
	return (
		<div className='inpt-search'>
			<input type='text' name='search' />
			<button onClick={(element) => handleClick(element)}><img className='icon' src={icone} /></button>
			<button onClick={(element) => toggleSearch(element)}><img className='icon' src={iconeMenu} /></button>
			<SearchFilters />
		</div>
	);
}

export default InptSearch;