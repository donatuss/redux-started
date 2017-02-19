import React, {Component} from 'react';

import TodoList from '../components/TodoList';

class VisibleTodoList extends Component {

    getVisibleTodos = (todos, filter) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(
                    t => t.completed
                );
            case 'SHOW_ACTIVE':
                return todos.filter(
                    t => !t.completed
                );
            default:
                return todos;
        }
    };

    render() {
        const {store} = this.props;
        const state = store.getState();
        //todos, onTodoClick
        return (
            <TodoList
                todos={this.getVisibleTodos(
                    state.todos,
                    state.visibilityFilter
                )}
                onTodoClick={id => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    });
                }}
            />
        )
    };
}

export default VisibleTodoList;