import React from 'react';
import { useState } from 'react';
import './FilterBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faAngleUp,
  faAngleDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function FilterBox({ filter, setFilter }) {
  function handleFilterToggle() {
    setFilter(!filter);
  }

  return (
    <>
      <div id="filter-box">
        <div id="filter">
          <FontAwesomeIcon icon={faFilter} className="filter-box-icons" />
          <span>FILTER</span>
          {filter ? (
            <FontAwesomeIcon
              icon={faAngleUp}
              className="filter-box-icons"
              onClick={handleFilterToggle}
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleDown}
              className="filter-box-icons"
              onClick={handleFilterToggle}
            />
          )}
        </div>

        <div id="search">
          <input type="text" placeholder="EVENT NAME" id="search-input" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="filter-box-icons"
          />
        </div>
      </div>

      {filter && (
        <form id="filter-options">
          <div className="filter-radio-buttons">
            <label for="all">ALL</label>
            <input type="radio" id="all" name="options" />
          </div>

          <div className="filter-radio-buttons">
            <label for="bookmarked">BOOKMARKED</label>
            <input type="radio" id="bookmarked" name="options" />
          </div>

          <div className="filter-radio-buttons">
            <label for="registered">REGISTERED</label>
            <input type="radio" id="registered" name="options" />
          </div>

          <div className="filter-radio-buttons">
            <label for="seats-available">SEATS AVAILABLE</label>
            <input type="radio" id="seats-available" name="options" />
          </div>
        </form>
      )}
    </>
  );
}

export default FilterBox;
