import { LightningElement, track } from 'lwc';

export default class Againday10dyi_todolist extends LightningElement {

        @track
        Todos=[
               
        ]

        taskName;
        size;

        handledeleteclick(event){

                let index = this.Todos.map(e => e.id).indexOf(Number(event.target.dataset.id));
                
                console.log(index);
                this.Todos.splice(index,1);
        }

        handlechange(event){
                this.taskName=event.target.value;
        }

        handleAdd(event){
                this.size = this.Todos.length;
                this.Todos.push({"id":this.size,"task":this.taskName});
        }
}