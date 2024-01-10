import { LightningElement,track } from 'lwc';

export default class Todolist extends LightningElement {

//global variables
    taskName='';

@track Todos=[ 
   
    {
        id:1,
        Task:'wake up'

    },
    {
        id:2,
        Task:'wake up early'

    },
    {
        id:3,
        Task:'wake up soon'

    }

]

handleAdd(event){
    this.taskName = (this.template.querySelector(".taskName").value).toString();
    this.Todos.push({"id":this.Todos.length+1,"Task":this.taskName})
    
}

deleteFunc(event){
    console.log((event.target.accessKey).toString());
    for(let i=0;i<this.Todos.length;i++){
        if(parseInt(event.target.accessKey)==parseInt(this.Todos[i].id)){
            console.log('i value is '+i)
            this.Todos.splice(i,1);
        }
    }
}

}