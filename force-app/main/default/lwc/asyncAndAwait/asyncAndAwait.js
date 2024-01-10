import { LightningElement } from 'lwc';

export default class AsyncAndAwait extends LightningElement {

    /*
    check_userName(firstName){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(firstName=='Arun'){
                    resolve('Accepted');
                }
                else{
                
                    reject('Not Accdepted');
                }
                
            }, 2000);
        })
    }
    */
    Posts=[];
    async HandleClick(event){
    /*
        this.check_userName('Arun').then((result)=>{
            alert(result);
        })
        .catch((error)=>{
            alert(error);
        })
    *///the above promise function can be easily called using async and wait

    
    let url="https://jsonplaceholder.typicode.com/posts";
    try{
       let response = await fetch(url,{method:"GET"});
       let Jsonbody = await  response.json();
       this.Posts=Jsonbody;
       console.log(this.Posts);
    }
    catch(e){
        console.log(e);
    }
    
     
    }

    handleInput(event){
           let name =  this.template.querySelector(".fName").value;
           console.log(name);
    }


}