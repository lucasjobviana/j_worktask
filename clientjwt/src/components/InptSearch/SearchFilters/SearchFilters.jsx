import React, { useContext } from 'react';
import { ControlPanelContext } from '../../../context';

function InptSearchFilter() {
  const { filterBy, setFilterBy } = useContext(ControlPanelContext);

  const handleChange = ({ target }) => {
    setFilterBy(target.value);
  };

  return (
    <div className="inpt-search-filters disabled">
      <form>
        <div>
          <label htmlFor="filterWork">
            Trabalho
            <input id="filterWork" type="radio" onChange={handleChange} name="filterType" value="work" checked={filterBy === 'work'} />
          </label>
        </div>

        <div>
          <label htmlFor="filterTask">
            Tarefa
            <input id="filterTask" type="radio" onChange={handleChange} name="filterType" value="task" checked={filterBy === 'task'} />
          </label>
        </div>

      </form>
    </div>
  );
}

export default InptSearchFilter;
