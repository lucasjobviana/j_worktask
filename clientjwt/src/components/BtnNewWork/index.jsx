import React from 'react';
import FormNewJob from './FormNewWork';
import './BtnNewWork.css';
import iconeAdd from '../../assets/icons/add24.ico';

function BtnNewWork() {
  const toggleForm = ({ target }) => {
    target.nextSibling.classList.toggle('disabled');
  };

  return (
    <div className="btn-new-job">
      <button onClick={(element) => toggleForm(element)}><img className="icon" src={iconeAdd} /></button>
      <FormNewJob />
    </div>
  );
}

export default BtnNewWork;
