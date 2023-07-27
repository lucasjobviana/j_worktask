import React from 'react';

const FormNewJob = () => {

	const toggleForm = () => {
		alert('togglei');
	}
	
	return (
		<div className='form-new-job'>
			<form>
				<label>
					<span>Nome:</span>
					<input type='text' name='nameNewJob' />
				</label>
				<label>
					<span>Descricao:</span>
					<input type='text' name='descNewJob' />
				</label>
				<label>
					<span>Visibilidade:</span>
					<select name='visibilityNewJob'>
						<option>Somente eu</option>
						<option>Minha Rede</option>
						<option>Todos</option>
						<option>Apenas ...</option>
					</select>
				</label>				
			</form>
		</div>
	);
}

export default FormNewJob;