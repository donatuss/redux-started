import React, {Component} from 'react';

import Link from '../components/Link';

class FilterLink extends Component {

    render() {
        const {filter, store, children} = this.props;
        const state = store.getState();

        return (
            <Link
                active={
                    filter === state.visibilityFilter
                }
                onClick={() => {
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                    });
                }}
            >{children}</Link>
        )
    };
}

export default FilterLink;