import React from 'react';
import { useState } from 'react';
import './Main.css';
import FilterBox from '../FilterBox';
import Events from '../Events';

function Main() {
  const [filter, setFilter] = useState(false);

  return (
    <main>
      <FilterBox filter={filter} setFilter={setFilter} />
      <Events />
    </main>
  );
}

export default Main;
