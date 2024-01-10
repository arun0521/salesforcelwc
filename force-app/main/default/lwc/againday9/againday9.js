import { LightningElement, track } from 'lwc';

export default class Againday9 extends LightningElement {

        boolvalue = false;

        @track
        person = ['Arun', 90000];

        @track
        employee = [{
                name: 'Arun',
                salary: 80000,
                position: 'Devloper'

        },
        {
                name: 'Sura',
                salary: 70000,
                position: 'Tester'

        },
        {
                name: 'Mathew',
                salary: 60000,
                position: 'Lead'

        },
        {
                name: 'karan',
                salary: 25000,
                position: 'Devloper'

        }

        ]


        @track
        product = {
                name: 'Biscuit',
                price: 10,
                stock: 30
        }




        fruits = ['Apple', 'Mango', 'Orange']


        get perosonName() {
                return this.person[0];
        }

        flag = true;
        handlechange(event) {
                this.flag = true;
                this.product.stock = event.target.value;
                console.log(Number(event.target.value));
                if (Number(event.target.value) == 0 && event.target.value != '') {
                        this.flag = false;
                }
        }
        empfilteredlist = [];
        handleempchange(event) {

                console.log(Number(event.target.value));
                this.empfilteredlist = [...this.employee.filter((x) => x.salary > Number(event.target.value))];
                console.log(this.empfilteredlist);


        }
}