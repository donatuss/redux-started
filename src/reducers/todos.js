const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(x => {
                if (x.id !== action.id) {
                    return x;
                } else {
                    return {
                        ...x,
                        completed: !x.completed
                    }
                }
            });
        default:
            return state;
    }
};

export default todos;
