import { LightningElement } from 'lwc';

export default class QuerySelectorAndSlectorAll extends LightningElement {

    employees=[

        {
            id  : 101,
            name : "Arun",
            Salary : 50000
        },
        {
            id  : 102,
            name : "Sam",
            Salary : 60000
        },
        {
            id  : 103,
            name : "Bess",
            Salary : 70000
        }

    ]

    handleSelect(event){
        const empNumber = event.target.dataset.empno;
        const emName = event.target.dataset.empname;
        console.log(emName+ ' ' +empNumber);
    }

    handleClear(event){
        const val = event.target.dataset.empno;    //`data ${}`

        //this.template.querySelector("lightning-input[data-empno='val']").value='';
        //back tick used with ${} to bind variable
        this.template.querySelector(`lightning-input[data-empno='${val}']`).value='';
    }

    handleClearFirst(){
         this.template.querySelector("lightning-input[data-empno='101']").value='';
        
    }

    handleClearAll(){
        Array.from(this.template.querySelectorAll("lightning-input")).forEach(element => {
            element.value='';
        });
           
        
    }


}