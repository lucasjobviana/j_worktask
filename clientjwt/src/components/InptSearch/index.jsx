import React from 'react';
import SearchFilters from './SearchFilters/SearchFilters';
import './InptSearch.css';
import icone from '../../assets/icons/search24.ico';
import iconeMenu from '../../assets/icons/filter24.ico';

function InptSearch() {
  const toggleSearch = ({ target }) => {
    target.nextSibling.classList.toggle('disabled');
  };

  const handleClick = () => {
    // const filterTypeElement = target.
    // parentNode.querySelector('input[name="filterType"]:checked');
    // console.log(target,filterBy)
  };

  return (
    <div className="inpt-search">
      <input type="text" name="search" />
      <button type="button" onClick={(element) => handleClick(element)}><img className="icon" src={icone} alt="Botão para filtrar or resultados." /></button>
      <button type="button" onClick={(element) => toggleSearch(element)}><img className="icon" src={iconeMenu} alt="Botão para abrir as opções de filtros" /></button>
      <SearchFilters />
    </div>
  );
}

export default InptSearch;
