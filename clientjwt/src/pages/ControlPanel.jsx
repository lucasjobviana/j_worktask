import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BtnNewJob from '../components/BtnNewJob'
import InptSearch from '../components/InptSearch'
import TblResults from '../components/TblResults'
import './ControlPanel.css'

const ControlPanel = () => {
	return (<div className='control-panel-container'>
		Painel de Controle
		<InptSearch />
		<BtnNewJob />
		<TblResults />
	</div>);
}

export default ControlPanel;