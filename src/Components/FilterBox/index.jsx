import React from 'react';
import './FilterBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faAngleUp,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function FilterBox() {
  return (
    <div id="filter-box">
      <div id="filter">
        <FontAwesomeIcon icon={faFilter} className="filter-box-icons" />
        <span>FILTER</span>
        <FontAwesomeIcon icon={faAngleUp} className="filter-box-icons" />
      </div>

      <div id="search">
        <input type="text" placeholder="EVENT NAME" id="search-input" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="filter-box-icons"
        />
      </div>
    </div>
  );
}

export default FilterBox;
