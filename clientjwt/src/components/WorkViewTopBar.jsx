import React, { useContext } from 'react';
import './WorkViewTopBar.css';
import iconeDel from '../assets/icons/del24.ico';
import iconClose from '../assets/icons/close24.ico';
// import iconEdit from '../assets/icons/edit24.ico';
import iconEdit from '../assets/icons/save24.ico';
import iconAdd from '../assets/icons/add24.ico';
import { TaskContext, WorkContext } from '../context';

function WorkViewTopBar({ name, id }) {
  const { addTask } = useContext(TaskContext);
  const { rmvWork } = useContext(WorkContext);
  const { editWork } = useContext(WorkContext);

  const closeView = (event) => {
    event.preventDefault();
    event.target.parentNode.parentNode.style.display = 'none';
  };

  const mapFormToTasks = (id) => {
    const formElements = document.getElementById(`work-view${id}`);

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

  const handleEditWork = (event, id) => {
    event.preventDefault();
    const workElement = event.target.parentNode.nextSibling;
    const descrition = workElement.querySelector('input[name="descritionWork"]').value;
    const name = workElement.querySelector('input[name="nameWork"]').value;
    // alert(nameValue);
    // alert(descritionValue);

    const tasks = mapFormToTasks(id);
    editWork({
      name, descrition, id, tasks,
    });
  };

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
      <img src={iconEdit} onClick={(event) => handleEditWork(event, id)} />
      <img src={iconAdd} onClick={(event) => addNewTask(event, null, id)} alt="Icône do botão Adicionar Tarefa." />
      <div className="icon">
        <h4>{name}</h4>
      </div>
    </div>
  );
}

export default WorkViewTopBar;
