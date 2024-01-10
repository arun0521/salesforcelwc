import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

       progressvalue=0;

       @api handleProgress(){
             const startinterval= setInterval(()=> {
                     this.progressvalue=this.progressvalue+10;
                     if(this.progressvalue>=100){
                            const e = new CustomEvent('finished');
                            this.dispatchEvent(e);
                            this.progressvalue=0;
                            clearInterval(startinterval);
                     }

              },300);

              

              
       }

       employees=[
              {
                     code:101,
                     name:'arun',
              },
              {
                     code:102,
                     name:'sura',  
              }
       ]

       handleClick(event){

              //1.create a customevent

              console.log('this is from child function');

              const e= new CustomEvent('display',{detail:this.employees});

              this.dispatchEvent(e);
       }

}