import TodoItem from "./models/TodoItem";
import TodoState, { NextState, PrevState } from "./models/TodoState";

class TodoService
{
    private todoList: TodoItem[];

    public constructor()
    {
        this.todoList = new Array<TodoItem>();
        
        if (this.todoList.length === 0)
        {
            this.FillSeed();
        }
    }

    private FillSeed()
    {
        this.todoList.push(new TodoItem('First ToDo'));
        this.todoList.push(new TodoItem('Second ToDo'));
        this.todoList.push(new TodoItem('Third ToDo'));
    }

    public Add(description: string, owner?: string, id?: string)
    {
        this.todoList.push(new TodoItem(description, undefined, owner, id))
    }

    public Delete(id: string)
    {
        this.todoList = this.todoList.filter(x => x.id != id);
    }

    public GetAll()
    {
        return this.todoList;
    }

    public MoveAcross(id: string)
    {
        const card = this.todoList.find(x => x.id == id);
        if (!card)
        {
            throw new Error("Not Found");
        }
        card.state = NextState(card.state);
        return card.state;
    }

    public MovePrevious(id: string): TodoState
    {
        const card = this.todoList.find(x => x.id == id);
        if (!card)
        {
            throw new Error("Not Found");
        }
        card.state = PrevState(card.state);
        return card.state;
    }
}

export default TodoService;