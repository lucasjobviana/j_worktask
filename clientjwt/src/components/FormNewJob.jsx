import React, { useState, useContext } from 'react';
import { WorkContext } from '../context';
import iconSave from '../assets/icons/save24.ico';

function FormNewJob() {
  const { addWork } = useContext(WorkContext);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidDescrition, setIsValidDescrition] = useState(false);

  const validateName = (target) => {
    target.value.length > 2 ? setIsValidName(true) : setIsValidName(false);
  };

  const validateDescrition = (target) => {
    target.value.length > 2 ? setIsValidDescrition(true) : setIsValidDescrition(false);
  };

  const addNewWork = (event) => {
    event.preventDefault();
    const { target: { form: { nameNewJob } } } = event;
    const { target: { form: { descNewJob } } } = event;
    addWork({ name: nameNewJob.value, descrition: descNewJob.value });
    nameNewJob.value = '';
    descNewJob.value = '';
    setIsValidDescrition(false);
  };

  return (
    <div className="form-new-job disabled">
      <form>
        <label>
          <input type="text" name="nameNewJob" onChange={(event) => validateName(event.target)} placeholder="Nome" />
        </label>
        <label>
          <input type="text" name="descNewJob" onChange={(event) => validateDescrition(event.target)} placeholder="Descricao" />
        </label>
        <label>
          <select name="visibilityNewJob">
            <option>Somente eu</option>
            <option>Minha Rede</option>
            <option>Todos</option>
            <option>Apenas ...</option>
          </select>
        </label>
        <button className="btnSave" disabled={!isValidName || !isValidDescrition} onClick={(e) => addNewWork(e)}>salvar</button>
      </form>
    </div>
  );
}

export default FormNewJob;
