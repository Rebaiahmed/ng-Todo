
import { Todo } from './Todo' ;


describe('Todo', ()=>{



it('should create an instance',()=>{
    expect(new Todo()).toBeTruthy();
})

//********Another unit testing*****************//

it('should accept values in the constructor',()=>{
    let todo = new Todo({
        title :'hello',
        complete : true
    });

    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
})


});