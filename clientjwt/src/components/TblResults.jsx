import React from 'react';
import FormNewJob from './FormNewJob';
import SearchFilters from './SearchFilters'
import './InptSearch.css'
import icone from './search24.ico'
import iconeMenu from './menu24.ico'

const TblResults = () => {

	const toggleSearch = ({target}) => {
		target.nextSibling.classList.toggle('disabled');	
	}
	
	const handleClick = ({target}) => {
		const filterTypeElement = target.parentNode.querySelector('input[name="filterType"]:checked');
		console.log(filterTypeElement.value)
	}
	
	return (
		<table className='tbl-results'>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Descricao</th>
					<th>Id</th>
					<th>Tarefas</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Projeto Todo List</td>
					<td>Criar um projeto todo list com react.</td>
					<td>1</td>
					<td>5</td>
				</tr>
				<tr>
					<td>Projeto Docker List</td>
					<td>Criar um projeto todo list com vanila js e docker.</td>
					<td>2</td>
					<td>6</td>
				</tr>
			</tbody>
		</table>
	);
}

export default TblResults;