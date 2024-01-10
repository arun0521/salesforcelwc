import { LightningElement } from 'lwc';

export default class Againday11_dyi extends LightningElement {

        flag=true;

        studentInfo=[
                {
                        name:'Arun',
                        id:1,
                        email:'test@gmail.com'
                },
                {
                        name:'Raj',
                        id:2,
                        email:'Raj@gmail.com'
                },
                {
                        name:'Ram',
                        id:3,
                        email:'Ram@gmail.com'
                },
                {
                        name:'Goutham',
                        id:4,
                        email:'Goutham@gmail.com'
                },
                {
                        name:'Vishnu',
                        id:5,
                        email:'Vishnu@gmail.com'
                },

        ]

        searchValue;

        handlechange(event){
               this.searchValue=event.target.value;
               console.log(this.searchValue); 
        }


         newInfo =[];
         index;
        handlesearch(event){
              // this.index=this.studentInfo.map(e=>e.name.toLocaleLowerCase()).indexOf(this.searchValue.toLocaleLowerCase());
              this.newInfo=this.studentInfo.filter(e => e.name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()));
                
              /*
              if(this.index!=-1){
                         this.newInfo = [...this.studentInfo.slice(this.index,this.index+1)];
                }
                */
                
                this.flag=false;
              

              console.log(this.newInfo);
        }

        handleNext(event){
               
                console.log("length "+this.studentInfo.length);

                if(this.index<this.studentInfo.length){
                        console.log("before add"+this.index);
                        this.index=this.index+1
                        console.log("after add"+this.index);
                        this.newInfo = [...this.studentInfo.slice(this.index,this.index+1)];
                        if(this.index==this.studentInfo.length-1){
                                this.index=-1;
                        }
                }
                

               
        }

        handlePrevious(event){

                console.log("length "+this.studentInfo.length);

                if(this.index<=this.studentInfo.length){
                        console.log("before minus"+this.index);
                        this.index=this.index-1
                        console.log("after minus"+this.index);
                        this.newInfo = [...this.studentInfo.slice(this.index,this.index+1)];
                        if(this.index==0){
                                this.index=this.studentInfo.length;
                        }
                }

        }
}