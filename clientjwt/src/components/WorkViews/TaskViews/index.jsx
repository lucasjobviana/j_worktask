/* eslint-disable import/no-cycle */
import React from 'react';
import TaskView from './TaskView';

function TaskViews({ taskViews, tabs = [] }) {
  return (
    <>
      {
        taskViews.map((t) => <TaskView key={`taskView${t.id}`} task={t} tabs={tabs} />)
      }
    </>
  );
}

export default TaskViews;
