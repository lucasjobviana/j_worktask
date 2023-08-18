import React, { useContext } from 'react';
import './TblResults.css';
import { ControlPanelContext, WorkContext, TaskContext } from '../../context';

function TblResults() {
  const { addWorkView } = useContext(ControlPanelContext);
  const { works } = useContext(WorkContext);
  const { tasks } = useContext(TaskContext);

  const showWorkDetails = (work) => {
    if (!addWorkView(work)) {
      const workViewElement = document.querySelector(`#work-view${work}`);
      workViewElement.style.display = 'flex';
    }

    document.querySelector(`#work-view${work}`).focus();
  };

  return (
    <div className="tbl-results">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>

            <th>Tarefas</th>
            <th>Finalizadas</th>
          </tr>
        </thead>
        <tbody>
          {
            works.map((work) => (
              <tr key={`work_${work.id}`} onClick={() => showWorkDetails(work.id)}>
                <td>{work.id}</td>
                <td>{work.name}</td>

                <td>
                  {
                    tasks.reduce(
                      (cont, w) => {
                        if (w.idWork === work.id) { return cont + 1; } return cont;
                      },
                      0,
                    )
                  }
                </td>
                <td>
                  {
                    tasks.reduce(
                      (cont, w) => {
                        if (w.checked === 4 && w.idWork === work.id) { return cont + 1; }
                        return cont;
                      },
                      0,
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TblResults;
