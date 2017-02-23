import React, {Component} from 'react';
import {Container, Grid, Divider} from 'semantic-ui-react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

class TodoApp extends Component {

    componentWillMount() {
        const {store} = this.context;

        //callback after action
        store.subscribe(() => {
            this.forceUpdate();
        });
    }

    render() {

        return (
            <div>
                <Container fluid>
                    <Divider/>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Footer/>
                        </Grid.Column>
                    </Grid>
                    <Grid centered columns={2} style={{position: 'relative', top: '-15px'}}>
                        <Grid.Column>
                            <AddTodo/>
                        </Grid.Column>
                    </Grid>
                </Container>
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <VisibleTodoList/>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

TodoApp.contextTypes = {
    store: React.PropTypes.object
};

export default TodoApp;