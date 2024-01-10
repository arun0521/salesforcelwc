import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class Day22Apex extends LightningElement {


        accountList;
        ratingValue;
        value;
        options;
        recordTypeidValue;

        //1.Get the record id from account object

        @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
        getAccountData({data,error})
        {
                if(data){
                        this.recordTypeidValue=data.defaultRecordTypeId;
                        console.log(this.recordTypeidValue);
                }
                if(error){
                        console.log(error);
                }
        }

        //2.get the picklist value from account id
        @wire(getPicklistValues,{recordTypeId:'$recordTypeidValue',fieldApiName:RATING_FIELD})
        getRatingPicklist({data,error})
        {
                if(data)
                {
                        this.options=[];
                        this.options=data.values.map((x)=>{
                                return  { label: x.label, value: x.value }
                        });

                        console.log('The options value is');
                        console.log(this.options);
                }
                if(error){
                        console.log('the error is');
                        console.log(error);
                }
        }


        //3.call the wire apex soql function and pass the parametter
        @wire(getAccounts,{RatingValue:'$ratingValue'})
        getAccountdata({data,error})
        {
                if(data){
                      this.accountList=data;  
                     // console.log('the rating accounts are');
                     // console.log(this.accountList);
                }
                if(error){
                        console.log(error)
                }
        }

        handleChange(event){
                this.value=event.detail.value;
                this.ratingValue=this.value;
        }
               
        


        
}