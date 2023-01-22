enum TodoState
{
    TODO = 'ToDo',
    DOING = 'Doing',
    DONE = 'Done'
}

export function NextState(state: TodoState)
{
    switch (state) {
        case TodoState.TODO:
            return TodoState.DOING;
    
        case TodoState.DOING:
            return TodoState.DONE;
        
        case TodoState.DONE:
            return TodoState.DONE;
    }
}

export function PrevState(state: TodoState)
{
    switch (state) {
        case TodoState.TODO:
            return TodoState.TODO;
    
        case TodoState.DOING:
            return TodoState.TODO;
        
        case TodoState.DONE:
            return TodoState.DOING;
    }
}

export default TodoState;