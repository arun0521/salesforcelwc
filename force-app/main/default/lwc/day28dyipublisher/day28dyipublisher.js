import { LightningElement, track, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleMessageChannel__c';
import { APPLICATION_SCOPE,publish,subscribe,unsubscribe,MessageContext } from 'lightning/messageService';
 

export default class Day28dyipublisher extends LightningElement {
        value;
        options;
        recordTypeId;
        msg;

         data;

         @wire(MessageContext)
         currentContext;


        @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
        getAccountRecordType({data,error}){
                if(data){
                        console.log('record id  is ::');
                     
                        this.recordTypeId=data.defaultRecordTypeId;

                       
                       

                       
                }
        }


        @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: RATING_FIELD })
        ratingPicklistValues({data,error}){
                if(data){
                       
                       

                        this.options=[];
                        const picklistvals=data.values;

                       this.options = picklistvals.map((x)=>{
                                return { label: x.label, value: x.value }
                        })

                        console.log('picklist values data::');
                        console.log(this.options);

                       
                }
        }

        @wire(getAccounts,{RatingValue:'$value'})
        AccountsData;

        handleChange(event){

                console.log('Accounts data::');
        
                console.log(JSON.stringify(this.AccountsData));


                this.value = event.detail.value;
                
               

        }

        handleClick(event){

                if(this.AccountsData.data && this.value!=''){
                        this.data=this.AccountsData.data;

                        console.log('Accounts inside data::');
        
                        console.log(JSON.stringify(this.data));

                         this.msg={
                                LMSData:{
                                        value:JSON.parse(JSON.stringify(this.data))
                                }  
                        }
                }

               

               console.log(this.msg);

                publish(this.currentContext,SAMPLEMSG,this.msg);

        }

        


}