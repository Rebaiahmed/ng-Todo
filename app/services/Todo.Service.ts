import { Injectable } from '@angular/core' ;

import { Todo} from '../models/Todo' ;

@Injectable()
export class TodoDataService {


lastId : number ;


//list of Todos *****//

todos : Todo[] = []  ;

constructor(){}

//**************Define our methods*********//

addTodo(todo:Todo) : TodoDataService{
    if(!todo.id)
    {
        todo.id ==++ this.lastId ;
    }

    this.todos.push(todo);
    return this ;
}

//**********************************************//


deleteTodoById(id:number) : TodoDataService {

this.todos = this.todos .filter(todo=>todo.id !==id) ;

    return this ;
}


//*************Update Todo item*************//


updateTodoById(id : number, values :Object={}): Todo {

let todo = this.getTodoById(id);
if(!todo){
    return null;
}
Object.assign(todo, values);
    return todo;
}


//*************** Retrun List of Todos*************//

getAllTodos(): Todo[] {
    return this.todos;
}


//*******getTodoById**********//


getTodoById(id:number): Todo {
     return this.todos
      .filter(todo => todo.id === id)
      .pop();
}



//*****************************//

toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id,{
        complete : !todo.complete
    });
    return updatedTodo;
}

}