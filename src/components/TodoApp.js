import React, {Component} from 'react';
import {Container, Grid, Divider, Label, Button, Input} from 'semantic-ui-react';


class TodoApp extends Component {

    constructor() {
        super();
        this.state = {
            txt1: 'E.' + Math.ceil(1000 * Math.random())
        };
    }

    handleClick = (e) => {
        const {store} = this.props;
        const v4 = require('uuid/v4');

        let random = 'E.' + Math.ceil(1000 * Math.random());

        //callback after action
        store.subscribe(() => {
            this.setState({txt1: random});
            this.refs.rTxt1.value = random;
        });

        console.log("BEFORE", store.getState());

        store.dispatch({
            type: 'ADD_TODO',
            id: v4(),
            text: e
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
                            <Input ref='rTxt1' type='text' defaultValue={this.state.txt1} />
                            <span style={{width:'5px', display: 'inline-block'}}/>
                            <Button name="btnAddTodo" onClick={this.handleClick.bind(null, this.state.txt1)}>
                                AddTodo - {this.state.txt1}
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
                <Container>
                    <Grid centered columns={2}>
                        <Grid.Column>
                            <Label.Group tag>
                                {this.props.store.getState().map((x) =>
                                    <Label as='a' style={{textDecoration: x.completed ? 'line-through' : 'none'}} key={x.id}>{x.text}</Label>
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