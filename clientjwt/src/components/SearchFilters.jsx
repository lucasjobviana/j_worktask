import React, { useContext } from 'react';
import { ControlPanelContext } from '../context'

const InptSearchFilter = () => {
	const { filterBy, setFilterBy } = useContext(ControlPanelContext);
	
	const handleChange = ({target}) => { console.log(target.value)
		setFilterBy(target.value)
	}
	
	return (
		<div className='inpt-search-filters disabled'>
			<form>
				<input type='radio' onChange={handleChange} name='filterType' value='work' checked={filterBy === 'work'} />Trabalhos
				<input type='radio' onChange={handleChange} name='filterType' value='task' checked={filterBy === 'task'} />Tarefas	
			</form>
		</div>
	);
}

export default InptSearchFilter;