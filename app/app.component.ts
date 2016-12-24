import { Component, OnInit,Input } from '@angular/core';

import { Todo } from './models/Todo' ;

import { TodoDataService } from './services/Todo.Service' ;

@Component({
  selector: 'my-app',
  templateUrl:'app/appcomponent.html',
  providers : [TodoDataService]
})
export class AppComponent //implements OnInit//
  { 
  
  
  @Input()
  newTodo : Todo = new Todo();
//call the service in the constructor******//

constructor(private todoservice :TodoDataService){

}

/*OnInit(){

}*/




//**********Define method Todo*************//


addTodo():void {
this.todoservice.addTodo(this.newTodo);
this.newTodo = new Todo();
}


removeTodo(todo:Todo): void{
this.todoservice.deleteTodoById(todo.id);
}


get todos(){
  return  this.todoservice.getAllTodos();
}

}
