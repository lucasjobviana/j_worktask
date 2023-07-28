import React, { useContext } from 'react';
import FormNewJob from './FormNewJob';
import WorkView from './WorkView';
import './BtnNewJob.css'
import iconeAdd from '../assets/icons/add24.ico'
import { ControlPanelContext, WorkContext } from '../context'

const WorkViews = () => {
	const { workViews } = useContext(ControlPanelContext);
	const { works } = useContext(WorkContext);
	
	return (
		<div className='work-views'>
		{
			workViews.map((w)=> <WorkView work={works.find((work) => work.id == w)} /> )
		}
		</div>
	);
}
//work={{ works.find((work) => work.id == w)}}
export default WorkViews;