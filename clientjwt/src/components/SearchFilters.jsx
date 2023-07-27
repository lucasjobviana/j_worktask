import React from 'react';

const FormNewJob = () => {
	
	return (
		<div className='form-new-job'>
			<form>
				<input type='radio' name='filterType' value='work' checked />Trabalhos
				<input type='radio' name='filterType' value='task' />Tarefas	
			</form>
		</div>
	);
}

export default FormNewJob;