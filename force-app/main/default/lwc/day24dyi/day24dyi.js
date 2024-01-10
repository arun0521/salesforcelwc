import { LightningElement ,api, wire} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import CONTACT_LOOKUP from '@salesforce/schema/Contact.AccountId';
import getAccountAddress from '@salesforce/apex/AccountController.getAccountAddress';

export default class Day24dyi extends LightningElement {

        nameField = CONTACT_LOOKUP;

        // Flexipage provides recordId and objectApiName
        @api recordId;
        @api objectApiName;


        accountIdData;
        accountList;


        @wire(getAccountAddress,{accountInfo: '$accountIdData'})
        getAccountsData({data,error}){
                if(data){
                        console.warn('data is');
                        this.accountList=data
                        console.warn(this.accountList);
                }
                if(error){
                        console.warn('error is');
                        console.warn(error);
                }
        }


        handleChange(event){
        
                if(event.target.value!=''){

                        this.accountIdData=event.target.value;

                        console.warn('the Id of account is '+this.accountIdData);
                }

                console.warn(this.accountList);
               
        }
}