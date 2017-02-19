import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = ({store}) => (
    <div>
        <FilterLink filter='SHOW_ALL' store={store}>All</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
        <FilterLink filter='SHOW_ACTIVE' store={store}>Active</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
        <FilterLink filter='SHOW_COMPLETED' store={store}>Competed</FilterLink>
    </div>
);

export default Footer;
