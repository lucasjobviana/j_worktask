import React, { useContext } from 'react';
import WorkView from './WorkView';
import './BtnNewJob.css';
import { ControlPanelContext, WorkContext } from '../context';

function WorkViews() {
  const { workViews } = useContext(ControlPanelContext);
  const { works } = useContext(WorkContext);

  return (
    <div className="work-views">
      {
        workViews.map((w, index) => <WorkView key={`Work_view${index}`} work={works.find((work) => work.id == w) || 0} />)
      }
    </div>
  );
}

export default WorkViews;
