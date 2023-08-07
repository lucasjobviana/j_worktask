import React, { useContext,useEffect } from 'react';
// import FormNewJob from './FormNewJob';
import WorkView from './WorkView';
import './BtnNewJob.css'
// import iconeAdd from '../assets/icons/add24.ico'
import { ControlPanelContext, WorkContext } from '../context'

const WorkViews = () => {
	const { workViews } = useContext(ControlPanelContext);
	const { works } = useContext(WorkContext);

	useEffect(()=>{
		console.log(':::::',workViews)
	},[workViews]);
	
	return (
		<div className='work-views'>
		{
			workViews.map((w,index)=> <WorkView key={`Work_view${index}`} work={works.find((work) => work.id == w)||0} />)
		}
		</div>
	);
}
//work={{ works.find((work) => work.id == w)}}
export default WorkViews;