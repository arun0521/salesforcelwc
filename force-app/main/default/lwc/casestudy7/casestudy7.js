import { LightningElement, api, wire } from 'lwc';
import Receipt_OBJECT from '@salesforce/schema/Receipt__c'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Receipt_MODEOFPAY from '@salesforce/schema/Receipt__c.Mode_Of_Pay__c'
import createReceipt from '@salesforce/apex/ReceiptController.createReceipt';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class Casestudy7 extends LightningElement {

        @api recordId;

        flag;


        connectedCallback(){
                this.flag=true;
        }

        renderedCallback(){
                //this.flag=true;
        }
        disconnectedCallback(){
                 this.flag=false;
        }

        value;

        defaultrecordid;

        options;

        receiptAmount;
        receiptDate;
        receiptModeOfPayment;


        @wire(getObjectInfo,{objectApiName:Receipt_OBJECT})
        getReceiptinfo({data,error})
        {
                if(data){
                        console.log('receipt data::');
                        console.log(data);
                        this.defaultrecordid=data.defaultRecordTypeId;
                }
                if(error){
                        console.log('error data::');
                        console.log(error);
                }

        }

        @wire(getPicklistValues,{ recordTypeId: '$defaultrecordid', fieldApiName: Receipt_MODEOFPAY})
        receiptpicklistval({data,error})
        {
                if(data)
                {
                        console.log('receipt picklist values:::');
                        

                        this.options=[];

                        this.options=data.values.map((x)=>{
                                return  { label: x.label, value: x.value }
                        });

                        console.log(this.options);
                }
        }



        handleClick(event){
                this.flag=true;
        }

        handleClose(event){
                this.flag=false;
        }

        handleChange(event){
                this.receiptModeOfPayment=event.detail.value;

        }

        handleInputChange(event){
                const{name,value}=event.target;

                if(name=="amount"){
                        this.receiptAmount=value;
                }
                if(name=="amountpaiddate"){
                        this.receiptDate=value;
                }
        }

        handleSave(event){


        
        if(this.receiptAmount){
                createReceipt({amount:this.receiptAmount,modeofpay:this.receiptModeOfPayment,paiddate:this.receiptDate,contactid:this.recordId})
                .then(response=>{
                        this.dispatchEvent(new ShowToastEvent({
                            title: "title",
                            message: "Receipt created with Id "+response,
                            variant: "success"
                        }));

                        this.flag=false;
                }).catch(error=>{
                        this.dispatchEvent(new ShowToastEvent({
                            title: "title",
                            message: "error in creating receipt "+error.body.pageErrors[0].message,
                            variant: "error"
                        }));
                })
        }
        else{
                this.dispatchEvent(new ShowToastEvent({
                    title: "title",
                    message: "Amount field is mandatory.Please enter amount",
                    variant: "error"
                }));
        }

               



        }
}