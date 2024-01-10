import { LightningElement } from 'lwc';

export default class Againday13 extends LightningElement {

        employees=[

                {
                    id  : 101,
                    name : "Arun",
                    salary : 50000
                },
                {
                    id  : 102,
                    name : "Sam",
                    salary : 60000
                },
                {
                    id  : 103,
                    name : "Bess",
                    salary : 70000
                }
        
            ]

            handleSelect(event){
                    let dataName = event.target.dataset.name;
                    console.log(dataName);
                    alert('the name is '+dataName);
            }

            handleClear(event){
                let dataid = event.target.dataset.id;
                console.log(dataid);

               this.template.querySelector("lightning-input[data-id='"+dataid+"']").value='';
                
            }

            handleFirstClear(event){
                (this.template.querySelectorAll("lightning-input"))[0].value='';
            }

            handleAllClear(event){

               Array.from(this.template.querySelectorAll("lightning-input")).forEach(x=>x.value='');

            }
        
}