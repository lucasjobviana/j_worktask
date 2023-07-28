import React, { useState, useContext } from 'react';
import { WorkContext } from '../context';

const FormNewJob = () => {
	const { addWork } = useContext(WorkContext);
	const [ isValidName, setIsValidName ] = useState(false);
	const [ isValidDescrition, setIsValidDescrition ] = useState(false);
	
	const validateName = (target) => {
	 target.value.length > 2 ? setIsValidName(true) : setIsValidName(false);
	}
	
	const validateDescrition = (target) => {
		target.value.length > 2 ? setIsValidDescrition(true) : setIsValidDescrition(false);
	}
	
	const addNewWork = (event) => {
		event.preventDefault();
		const { target: { form : { nameNewJob } }  } = event;
		const { target: { form : { descNewJob } }  } = event; 
		addWork({ name: nameNewJob.value, desc:descNewJob.value})
	}
	
	
	return (
		<div className='form-new-job disabled' >
			<form>
				<label>
					<span>Nome:</span>
					<input type='text' name='nameNewJob' onChange={(event) => validateName(event.target)} />
				</label>
				<label>
					<span>Descricao:</span>
					<input type='text' name='descNewJob' onChange={(event) => validateDescrition(event.target)} />
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
				<button disabled={ !isValidName || !isValidDescrition} onClick={(e) => addNewWork(e)} >Salvar</button>	
			</form>
		</div>
	);
}

export default FormNewJob;