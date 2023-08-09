import React, { useContext } from 'react';
import './WorkViewTopBar.css';
import iconeDel from '../assets/icons/del24.ico';
import iconClose from '../assets/icons/close24.ico';
import iconEdit from '../assets/icons/edit24.ico';
import iconSave from '../assets/icons/save24.ico';
import iconAdd from '../assets/icons/add24.ico';
import { TaskContext, WorkContext } from '../context';

function WorkViewTopBar({ name, id }) {
  const { addTask } = useContext(TaskContext);
  const { rmvWork } = useContext(WorkContext);

  const closeView = (event) => {
    event.preventDefault();
    event.target.parentNode.parentNode.style.display = 'none';
  };

  //   const editWork = (event) => {
  //     console.log('editWork');
  //     console.log(event.target);
  //   };

  const deleteWork = async (event) => {
    event.preventDefault();
    await rmvWork(id);
  };

  const addNewTask = (event, idParentTask, idWork) => {
    event.preventDefault();
    addTask({
      name: 'Nova Tarefa', descrition: 'Nova Descrição', idParentTask, idWork,
    });
  };

  const toggleView = ({ target }) => {
    target.nextSibling.style.display = window.getComputedStyle(target.nextSibling).display === 'block' ? 'none' : 'block';
  };

  return (
    <div className="top-bar" onClick={toggleView}>
      <img src={iconClose} onClick={closeView} alt="Icône do botão Fechar Janela." />
      <img src={iconeDel} onClick={(event) => deleteWork(event)} alt="Icône do botão Deletar Tarefa." />
      <img src={iconEdit} onClick={(event) => editWork(event)} />
      {/* <img src={iconSave} onClick={() => alert('salvar')} className="disabled" />  */}

      <img src={iconAdd} onClick={(event) => addNewTask(event, null, id)} alt="Icône do botão Adicionar Tarefa." />
      <div className="icon">
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default WorkViewTopBar;
