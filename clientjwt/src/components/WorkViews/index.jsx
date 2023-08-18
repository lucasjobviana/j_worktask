import React, { useContext } from 'react';
import WorkView from './WorkView';
import { ControlPanelContext, WorkContext } from '../../context';

function WorkViews() {
  const { workViews } = useContext(ControlPanelContext);
  const { works } = useContext(WorkContext);

  return (
    <div className="work-views">
      {
        workViews.map((w) => <WorkView key={`Work_view${w.id}`} work={works.find((work) => work.id === w) || 0} />)
      }
    </div>
  );
}

export default WorkViews;
