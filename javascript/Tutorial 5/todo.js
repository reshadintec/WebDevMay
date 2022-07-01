class TodoApplication{
    constructor(){
        this.todos = [];
    }
    //  addTodo
    addTodo(todo){
        return this.todos.push (todo);
    }
    //  getTodos -> all todos
    getTodos(){
        return this.todos;
    }
    //  getTodobyId -> Single todo 

    // getTodobyvalue -> 
    ByValue(todo){
        let single_todo = this.todos.filter(val => val.toLowerCase() .trim() == todo.toLowerCase())
        console.log(single_todo);
    }
    //  deleteTodoById -> delete todo 
    deleteTodoByValue(todo){
        let index = this.todos.indexOf(todo);
        console.log(this.todos[index])
    }

    //  toString -> didsplay my todos
    toString(){
    this.todos.forEach((todo,index)=>{
        console.log(`${index} Task: ${todo}`)
    })

}
}

// create a new todo application 
let app = new TodoApplication();
app.addTodo("Go to the store");
app.addTodo("Finish my homework");
app.addTodo("Learn Javascript");
app.addTodo("Bring Water");
// console.log (app.getTodos());
app.toString();
app.ByValue("Hello ");
app.deleteTodoByValue("Finish my homework");
app.toString();
