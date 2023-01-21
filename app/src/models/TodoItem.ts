import {v4 as uuid} from 'uuid';
import TodoState from './TodoState';

class TodoItem 
{
    public state: string;
    public description: string;
    public owner: string;
    public id: string;

    constructor(description: string, state: string = TodoState.TODO, owner: string = '', id: string = uuid())
    {
        this.state = state;
        this.description = description;
        this.owner = owner;
        this.id = id;
    }
}

export default TodoItem;