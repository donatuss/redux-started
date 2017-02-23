import React, {Component} from 'react';

import Link from '../components/Link';

class FilterLink extends Component {

    render() {
        const {filter, children} = this.props;
        const {store} = this.context;

        return (
            <Link
                active={
                    filter === store.getState().visibilityFilter
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

FilterLink.contextTypes = {
    store: React.PropTypes.object
};

export default FilterLink;