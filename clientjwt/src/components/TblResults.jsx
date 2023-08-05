import React, { useContext } from 'react';
// import FormNewJob from './FormNewJob';
// import SearchFilters from './SearchFilters'
import './TblResults.css'
// import icone from '../assets/icons/search24.ico'
// import iconeMenu from '../assets/icons/menu24.ico'
// import tasks from '../../tests/mocks/tasks'
import { ControlPanelContext } from '../context'
import { WorkContext, TaskContext } from '../context'

const TblResults = () => {
	const {  addWorkView, workViews } = useContext(ControlPanelContext);
	const { works } = useContext(WorkContext);
	const { tasks } = useContext(TaskContext);
	console.log(workViews)
	// const toggleSearch = ({target}) => {
	// 	target.nextSibling.classList.toggle('disabled');	
	// }
	
	// const handleClick = ({target}) => {
	// 	const filterTypeElement = target.parentNode.querySelector('input[name="filterType"]:checked');
	// 	console.log(filterTypeElement.value)
	// }

	const showWorkDetails = (work) => {
		if(!addWorkView(work)){
			let workViewElement = document.querySelector(`#work-view${work}`);
			workViewElement.style.display = 'flex';
			// event.target.parentNode.parentNode.style.display = 'none';
			
		}
		// workViewElement.style.display = 'flex';
		document.querySelector(`#work-view${work}`).focus() ; 
		// event.target.parentNode.parentNode.style.display = 'none';
		// !addWorkView(work) && document.querySelector(`#work-view${work}`).focus();
	}
	
	return (
	<div className='tbl-results'>
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Nome</th>
					<th>Descricao</th>
					<th>Tarefas</th>
					<th>Finalizadas</th>
				</tr>
			</thead> 
			<tbody>
			{
				works.map((work,index)=>{ 
					return <tr key={`work_${index}`} onClick={()=>showWorkDetails(work.id)} >
					<td>{work.id}</td><td>{work.name}</td><td>{work.desc}</td>
					<td>{
							tasks.reduce((cont, w) =>{
								if(w.idWork == work.id){cont++;}console.log('meu checked',w.checked);return cont;
							}
							
							,0)
						}</td><td>
						{
							tasks.reduce((cont, w) =>{
								if(w.checked == 4 && w.idWork == work.id){cont++;}console.log('meu checked',w.checked);return cont;
							}
							
							,0)
						}</td>
					</tr>
				})
				
			}
			</tbody>
		</table>
	</div>
	);
}

export default TblResults;