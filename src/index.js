import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp';
import configureStore from './store/configureStore';
import Provider from './Provider';

ReactDOM.render(
    <Provider store={configureStore()}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
