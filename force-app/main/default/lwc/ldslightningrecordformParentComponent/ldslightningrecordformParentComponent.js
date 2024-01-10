import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class LdslightningrecordformParentComponent extends LightningElement {

    //objectName = ACCOUNT_OBJECT;
    fieldsList=[NAME_FIELD,INDUSTRY_FIELD,ANNUALREVENUE_FIELD];
    @api objectApiName;
    @api recordId;

   
       
    
    //https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form


}