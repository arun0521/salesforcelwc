import { LightningElement } from 'lwc';
import createContactHere from '@salesforce/apex/ContactController.createContactHere';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from "lightning/navigation";


export default class Casestudy5 extends NavigationMixin(LightningElement)  {

        firstName;
        lastName;
        dateOfBirth;
        email;
        department;


        handleChange(event){

                const{name,value}=event.target;

                switch (name) {
                        case "firstname":
                                this.firstName=value;
                                break;
                        case "lastname":
                                this.lastName=value;
                                break;
                        case "birthdate":
                                this.dateOfBirth=value;
                                break; 
                        case "email":
                                this.email=value;
                                break;   
                        case "department":
                                this.department=value;
                                 break;    
                        default:
                                break;
                }

        }

        handleClick(event){

                createContactHere({lastName:this.lastName,firstName:this.firstName,birthdate:this.dateOfBirth,email:this.email,department:this.department})
                .then(response=>{
                        this.dispatchEvent(new ShowToastEvent({
                                title: "title",
                                message: "New contact created with id "+response,
                                variant: "success"
                            }));

                            this[NavigationMixin.Navigate]({
                                type: "standard__recordPage",
                                attributes: {
                                    actionName: "view",
                                    recordId: response,
                                    objectApiName: "Contact"
                                }
                            });
                }).catch(error=>{
                        this.dispatchEvent(new ShowToastEvent({
                            title: "title",
                            message: "unable to create record " +error.body.pageErrors[0].message,
                            variant: "error"
                        }));
                })

        }

}