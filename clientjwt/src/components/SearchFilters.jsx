import React, { useContext } from 'react';
import { ControlPanelContext } from '../context';

function InptSearchFilter() {
  const { filterBy, setFilterBy } = useContext(ControlPanelContext);

  const handleChange = ({ target }) => {
    setFilterBy(target.value);
  };

  return (
    <div className="inpt-search-filters disabled">
      <form>
        <div>
          <input type="radio" onChange={handleChange} name="filterType" value="work" checked={filterBy === 'work'} />
          <label>Trabalho</label>
        </div>

        <div>
          <input type="radio" onChange={handleChange} name="filterType" value="task" checked={filterBy === 'task'} />
          <label>Tarefa</label>
        </div>

      </form>
    </div>
  );
}

export default InptSearchFilter;
