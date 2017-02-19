import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = ({onFilterClick, visibilityFilter}) => (
    <div>
        <FilterLink onFilterClick={onFilterClick} filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
        <FilterLink onFilterClick={onFilterClick} filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
        <FilterLink onFilterClick={onFilterClick} filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Competed</FilterLink>
    </div>
);

export default Footer;
