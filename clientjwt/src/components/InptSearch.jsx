import React from 'react';
import FormNewJob from './FormNewJob';
import SearchFilters from './SearchFilters'
import './InptSearch.css'
import icone from './search24.ico'
import iconeMenu from './menu24.ico'

const InptSearch = () => {

	const toggleSearch = ({target}) => {
		target.nextSibling.classList.toggle('disabled');	
	}
	
	const handleClick = ({target}) => {
		const filterTypeElement = target.parentNode.querySelector('input[name="filterType"]:checked');
		console.log(filterTypeElement.value)
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