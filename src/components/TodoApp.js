import React, {Component} from 'react';
import {Container, Grid, Divider, Label, Button} from 'semantic-ui-react';


class TodoApp extends Component {

    componentWillMount() {
        const {store} = this.props;

        //callback after action
        store.subscribe(() => {
            this.setState({});
        });
    }

    componentWillUpdate(prevProps) {
        if (this.refs.rTxt1.value === 'undefined') {
            this.refs.rTxt1.value = 'E.' + Math.ceil(1000 * Math.random());
        }
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

        this.refs.rTxt1.value = undefined;

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

    render() {
        return (
            <div>
                <Container fluid>
                    <Divider/>
                    <Grid centered columns={2}>
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
                            <Label.Group tag>
                                {this.props.store.getState().map((x) =>
                                    <Label as='a' onClick={() => this.onTodoClick(x.id)} style={{textDecoration: x.completed ? 'line-through' : 'none'}}
                                           key={x.id}>{x.text}</Label>
                                )}
                            </Label.Group>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}


export default TodoApp;