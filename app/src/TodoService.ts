import TodoItem from "./models/TodoItem";

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
}

export default TodoService;