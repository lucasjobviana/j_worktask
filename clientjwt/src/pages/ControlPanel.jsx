import React from 'react'
// import PropTypes from 'prop-types'
import BtnNewJob from '../components/BtnNewJob'
import InptSearch from '../components/InptSearch'
import TblResults from '../components/TblResults'
import WorkViews from '../components/WorkViews'
import './ControlPanel.css'

const ControlPanel = () => {	 
	return (<div className='control-panel-container'>
		<h1>Painel de Controle</h1>
		<InptSearch />
		<BtnNewJob />
		<TblResults />
		<WorkViews />
	</div>);
}

export default ControlPanel;