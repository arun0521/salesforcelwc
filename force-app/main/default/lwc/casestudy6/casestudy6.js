import { LightningElement, wire } from 'lwc';
import getAccountsWithName from '@salesforce/apex/AccountController.getAccountsWithName';


export default class Casestudy6 extends LightningElement {

        accountName='';

        accountdata;

        accounts;

         columns = [
                { label: 'Id', fieldName: 'Id' },
                { label: 'Name', fieldName: 'Name'},
                { label: 'Account Number', fieldName: 'AccountNumber'},
                { label: 'Billing State', fieldName: 'BillingState'},
            ];


        /*
        @wire(getAccountsWithName,{name:'$accountName'})
        getAccounts({data,error}){
                if(data){
                        console.log('Accounts with name ::');
                        console.log(data);

                        this.accounts=data;
                }
                if(error){
                        console.log('error ::');
                        console.log(error);
                }
        }
        */
        

        handleChange(event){
                this.accountName=event.target.value + '%';
                

        }

        handleClick(event){


               getAccountsWithName({name:this.accountName})
               .then(response=>{
                   console.log('accs with ::'+this.accountName);
                   console.log(response);
                   this.accountdata=response;
               })
               .catch(error=>{
                   console.log('error in accs::');
                   console.log(error);
               })

        }
}