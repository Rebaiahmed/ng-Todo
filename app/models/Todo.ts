export class Todo {

    id : number ;
    title : string = '' ;
    complete : boolean = false ;

//**********Constructor******//

constructor(values : Object = {}){
    Object.assign(this, values);
}


}