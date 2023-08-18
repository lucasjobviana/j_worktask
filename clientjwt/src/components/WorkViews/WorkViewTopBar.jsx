/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useContext } from 'react';
import './WorkViewTopBar.css';
import iconeDel from '../../assets/icons/del24.ico';
import iconClose from '../../assets/icons/close24.ico';
import iconSave from '../../assets/icons/save24.ico';
import iconAdd from '../../assets/icons/add24.ico';
import { TaskContext, WorkContext } from '../../context';

function WorkViewTopBar({ name, id }) {
  const { addTask } = useContext(TaskContext);
  const { rmvWork } = useContext(WorkContext);
  const { editWork } = useContext(WorkContext);

  const closeView = (event) => {
    event.preventDefault();
    const parentElement = event.target.parentNode.parentNode;
    parentElement.style.display = 'none';
  };

  const mapFormToTasks = (workViewId) => {
    const formElements = document.getElementById(`work-view${workViewId}`);
    const idTasks = Array.from(formElements.querySelectorAll('input[name="id"]'));
    const isCheckeds = Array.from(formElements.querySelectorAll('input[name="isChecked"]'));
    const nameValues = Array.from(formElements.querySelectorAll('input[name="name"]'));
    const descritionValues = Array.from(formElements.querySelectorAll('input[name="descrition"]'));

    const tasks = isCheckeds.map((_, index) => ({
      id: Number(idTasks[index].value),
      name: nameValues[index].value,
      descrition: descritionValues[index].value,
      checked: isCheckeds[index].checked ? 4 : 3,
    }));

    return tasks;
  };

  const handleEditWork = (event, workViewId) => {
    event.preventDefault();
    const workElement = event.target.parentNode.nextSibling;
    const descValue = workElement.querySelector('input[name="descritionWork"]').value;
    const nameValue = workElement.querySelector('input[name="nameWork"]').value;
    const tasks = mapFormToTasks(workViewId);
    editWork({
      name: nameValue, descrition: descValue, id, tasks,
    });
  };

  const deleteWork = async (event) => {
    event.preventDefault();
    await rmvWork(id);
  };

  const addNewTask = (event, idParentTask, idWork) => {
    event.preventDefault();
    addTask({
      name: 'Nova Tarefa', descrition: 'Nova Descrição', idParentTask, idWork, checked: 3,
    });
  };

  const toggleView = ({ target }) => {
    const workContentElement = target.nextSibling;
    workContentElement.style.display = window.getComputedStyle(target.nextSibling).display === 'block' ? 'none' : 'block';
  };

  const handleDeyDown = (event, callback = () => {}) => {
    if (event.key === 'Enter' || event.key === ' ') {
      callback(event);
    }
  };

  return (
    <div className="top-bar" role="button" tabIndex={0} onClick={toggleView} onKeyDown={(e) => handleDeyDown(e, toggleView)}>
      <img src={iconClose} role="button" tabIndex={0} onClick={closeView} onKeyDown={(e) => handleDeyDown(e, closeView)} alt="Icône do botão Fechar Janela." />
      <img src={iconeDel} role="button" tabIndex={0} onClick={(event) => deleteWork(event)} onKeyDown={(e) => handleDeyDown(e, deleteWork)} alt="Icône do botão Deletar Lista de tarefas." />
      <img src={iconSave} role="button" tabIndex={0} onClick={(event) => handleEditWork(event, id)} onKeyDown={(e) => handleDeyDown(e, handleEditWork)} alt="Icone do botão Salvar Lista de Tarefas." />
      <img src={iconAdd} role="button" tabIndex={0} onClick={(event) => addNewTask(event, null, id)} onKeyDown={(e) => handleDeyDown(e, addNewTask)} alt="Icône do botão Adicionar nova tarefa." />
      <div className="icon">
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default WorkViewTopBar;
