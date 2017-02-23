import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class AddTodo extends Component {

    render() {
        const {store} = this.context;
        const v4 = require('uuid/v4');
        let input;

        return (
            <div>
                <div className="ui input">
                    <input
                        ref={node => {
                            input = node
                        }}
                        type='text'
                        defaultValue={'E.' + Math.ceil(1000 * Math.random())}/>
                </div>
                <span style={{width: '5px', display: 'inline-block'}}/>
                <Button name="btnAddTodo" onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: v4(),
                        text: input.value
                    });
                    input.value = 'E.' + Math.ceil(1000 * Math.random());
                }}>
                    AddTodo
                </Button>
            </div>
        );
    }
}

AddTodo.contextTypes = {
    store: React.PropTypes.object
};

export default AddTodo;