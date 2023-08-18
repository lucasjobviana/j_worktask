import React from 'react';
import TblResults from '../components/TblResults';
import WorkViews from '../components/WorkViews';
import BtnNewWork from '../components/BtnNewWork';
import InptSearch from '../components/InptSearch';
import './ControlPanel.css';

function ControlPanel() {
  return (
    <div className="control-panel-container">
      <h1>Lista de Tarefas 1.0</h1>
      <InptSearch />
      <BtnNewWork />
      <TblResults />
      <WorkViews />
    </div>
  );
}

export default ControlPanel;
