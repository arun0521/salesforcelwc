import { LightningElement } from 'lwc';

export default class Againday11 extends LightningElement {

        //url="https://jsonplaceholder.typicode.com/posts";

        url="https://sfdev36-dev-ed.my.salesforce-sites.com/services/apexrest/employees";
        posts=[];
        async handleClick(event){

                

               let response= await fetch(this.url,{method:"GET"});

               let data=await response.json();

               this.posts=data;

               console.log(this.posts);

        }

        async connectedCallback(){
                let response= await fetch(this.url,{method:"GET"});

               let data=await response.json();

               this.posts=data;

               console.log(this.posts);
        }
}