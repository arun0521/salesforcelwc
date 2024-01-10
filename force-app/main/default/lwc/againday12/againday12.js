import { LightningElement } from 'lwc';

export default class Againday12 extends LightningElement {


        handleClick(event){
               const p= this.template.querySelector("lightning-input[data-id='A']").value;
               console.log(p);
        }
}