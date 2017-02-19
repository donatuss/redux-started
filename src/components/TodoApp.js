import React, {Component} from 'react';
import {Container, Grid, Divider, Button} from 'semantic-ui-react';

import FilterLink from '../containers/FilterLink';
import TodoList from './TodoList';

class TodoApp extends Component {

    componentWillMount() {
        const {store} = this.props;

        //callback after action
        store.subscribe(() => {
            this.setState({});
        });
    }

    handleClick = () => {
        const {store} = this.props;
        const v4 = require('uuid/v4');

        console.log("BEFORE", store.getState());
        store.dispatch({
            type: 'ADD_TODO',
            id: v4(),
            text: this.refs.rTxt1.value
        });
        console.log("AFTER", store.getState());
        this.refs.rTxt1.value = 'E.' + Math.ceil(1000 * Math.random());

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
                            <FilterLink {...this.props} filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
                            <span style={{width: '5px', display: 'inline-block'}}/>
                            <FilterLink {...this.props} filter='SHOW_ACTIVE' currentFilter={visibilityFilter}>Active</FilterLink>
                            <span style={{width: '5px', display: 'inline-block'}}/>
                            <FilterLink {...this.props} filter='SHOW_COMPLETED' currentFilter={visibilityFilter}>Competed</FilterLink>
                        </Grid.Column>
                    </Grid>
                    <Grid centered columns={2} style={{position: 'relative', top: '-15px'}}>
                        <Grid.Column>
                            <div className="ui input">
                                <input ref='rTxt1' type='text' defaultValue={'E.' + Math.ceil(1000 * Math.random())}/>
                            </div>
                            <span style={{width: '5px', display: 'inline-block'}}/>
                            <Button name="btnAddTodo" onClick={this.handleClick.bind(this)}>
                                AddTodo
                            </Button>
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