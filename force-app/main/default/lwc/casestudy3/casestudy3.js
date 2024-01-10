import { LightningElement, api ,wire} from 'lwc';
import relatedContacts from '@salesforce/apex/ContactController.relatedContacts';

export default class Casestudy3 extends LightningElement {

        @api recordId;


        data=[];

        columns=[
                { label: 'Id', fieldName: 'Id' },
                { label: 'Name', fieldName: 'Name'},
                { label: 'Phone', fieldName: 'Phone', type: 'phone' },
                { label: 'Email', fieldName: 'Email', type: 'email' },

            ];


            @wire(relatedContacts,{idOfAcc:'$recordId'})
            getContactdata({data,error})
            {
                if(data){
                        console.log('contacts we got ::');
                        console.log(data);

                        this.data=data;
                }
            }
}