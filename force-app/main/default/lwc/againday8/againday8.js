import { LightningElement } from 'lwc';

export default class Againday8 extends LightningElement {

style='myadminstyle';

firstName;

    person = [
        {
            name:'Arun',
            position:'devloper',
            age:30,
            address:{
                city:'Chennai',
                district:'Chennai',
                zip:'600114'
            }

        }
    ]

    get name(){
        return this.person[0].name;
    }

    get personcity(){
        return this.person[0].address.city;
    }

    handlechange(event){
        console.log(event.target.value);
        console.log(event.target.name);
        this.firstName=event.target.value;

    }

    handleClick(event){
        this.style='mystyle';
    }

}