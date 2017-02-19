import React, {Component} from 'react';
import {Container, Grid, Divider} from 'semantic-ui-react';

import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class TodoApp extends Component {

    componentWillMount() {
        const {store} = this.props;

        //callback after action
        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    onAddClick = (val) => {
        const {store} = this.props;
        const v4 = require('uuid/v4');

        console.log("BEFORE", store.getState());
        store.dispatch({
            type: 'ADD_TODO',
            id: v4(),
            text: val
        });
        console.log("AFTER", store.getState());

    };

    onTodoClick = (id) => {
        const {store} = this.props;

        console.log("BEFORE", store.getState());
        store.dispatch({
            type: 'TOGGLE_TODO',
            id
        });
        console.log("AFTER", store.getState());
    };


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
        const {todos, visibilityFilter} = this.props.store.getState();
        const visibleTodos = this.getVisibleTodos(
            todos,
            visibilityFilter,
        );

        return (
            <div>
                <Container fluid>
                    <Divider/>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Footer store={this.props.store}/>
                        </Grid.Column>
                    </Grid>
                    <Grid centered columns={2} style={{position: 'relative', top: '-15px'}}>
                        <Grid.Column>
                            <AddTodo onAddClick={this.onAddClick}/>
                        </Grid.Column>
                    </Grid>
                </Container>
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <TodoList todos={visibleTodos} onTodoClick={this.onTodoClick}/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default TodoApp;