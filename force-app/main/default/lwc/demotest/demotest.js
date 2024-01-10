import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import { createRecord } from 'lightning/uiRecordApi';


export default class Demotest extends LightningElement {

     
        accountformdata={};
        
        handleChange(event){
                const{name,value}=event.target;//destructing event.target as name which is api name which we gave in html and value pair-->name:abc,annualrevenue:550000
                this.accountformdata[name]=value;

        }

        handleClick(event){
                createRecord({apiName:"Account",fields:this.accountformdata})
                .then(response=>{
                        console.log(response);
                        this.accountformdata={};//clearing the enetred data after inserting
                })

        }
        



}