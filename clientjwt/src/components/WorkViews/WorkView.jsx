/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useRef, useEffect, useContext, useState,
} from 'react';
import WorkViewTopBar from './WorkViewTopBar';
import './WorkView.css';
import { TaskContext } from '../../context';
import TaskViews from './TaskViews';

function WorkView({ work }) {
  const [disabledEdit, setDisabledEdit] = useState(true);
  const [workName, setWorkName] = useState(work.name);
  const [workDescrition, setWorkDescrition] = useState(work.descrition);
  const divRef = useRef(null);
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  const toogleEdit = (event) => {
    event.preventDefault();
    event.target.classList.add('behide');
    setDisabledEdit(false);
  };

  const tasksOfWork = tasks.filter((t) => (t.idWork === work.id && t.idParentTask === null));//

  return (
    <div className="work-view" id={`work-view${work.id}`}>
      <WorkViewTopBar name={work.name} id={work.id} />
      <div className="work-content">
        <div>
          <input type="number" disabled value={work.id} />

          <div className="divInput">
            <button id="iptWorkName" ref={divRef} tabIndex={0} type="button" className="btn-cover" onClick={(event) => toogleEdit(event)} />
            <input disabled={disabledEdit} className="td-editable" name="nameWork" type="text" value={workName} onInput={(e) => setWorkName(e.target.value)} />
          </div>

          <div className="divInput">
            <button type="button" className="btn-cover" onClick={(event) => toogleEdit(event)} />
            <input disabled={disabledEdit} className="td-editable" name="descritionWork" type="text" value={workDescrition} onInput={(e) => setWorkDescrition(e.target.value)} />
          </div>

        </div>

        <div className="tableContainer">
          <table className="task-views"><tbody><TaskViews taskViews={tasksOfWork} /></tbody></table>
        </div>
      </div>
    </div>
  );
}

export default WorkView;
