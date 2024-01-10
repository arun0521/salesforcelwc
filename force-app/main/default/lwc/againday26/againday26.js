import { LightningElement,api, wire } from 'lwc';
import getBasicAccounts from '@salesforce/apex/AccountController.getBasicAccounts';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import RATING_FIELD from '@salesforce/schema/Account.Rating';





export default class Againday26 extends LightningElement {
/*
        columns=[

                {label:'Id', fieldName: 'Id' },
                {label:'Name', fieldName: 'Name' },
                {label:'Progress', fieldName: 'score',type:'progRing' },

        ]


        data=[
                {'Id':1232,'Name':'arun','score':'70'},
                {'Id':2345,'Name':'sura','score':'40'},
                {'Id':5432,'Name':'tdfvd','score':'20'},
        ]
        */

        saveDraftValues;
        getAccountsData;
        wiredRefreshData;

        picklistData;
        options;
        value;

        actions = [
                { label: 'View', name: 'view' ,iconName:'utility:preview'},
                { label: 'Edit', name: 'edit' ,iconName:'utility:edit'},
                { label: 'Delete', name: 'delete' ,iconName:'utility:delete'},
            ];

            columns=[
                {label:'Id', fieldName: 'Id' },
                {label:'Name', fieldName: 'Name' ,editable:true},
                {label:'Rating', fieldName: 'Rating',editable:true,type:'comboBox',
                   typeAttributes:{
                        options : {fieldName:'pickliostOptioon'},
                        value:{fieldName:this.value},
                        placeholder:'choose rating'
                   }
        },
                {label:'Annual Revenue', fieldName: 'AnnualRevenue' },
                {   label: 'Action',
                    type: 'action',
                    initialWidth:'50px',
                         typeAttributes: { rowActions: this.actions },
                }
                
        ];


        @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
        accountMetaData;


       
        @wire(getPicklistValues,{recordTypeId:'$accountMetaData.data.defaultRecordTypeId',fieldApiName:RATING_FIELD})
        ratingpicklist({data,error})
        {
                if(data){
                        this.picklistData=data.values;
                       this.options=[];

                       console.log('data :: '+ JSON.stringify(this.picklistData));

                       this.options=this.picklistData.map((x)=>{
                               return { label: x.label, value: x.value }
                        })

                        console.log('picklist values ::');
                        console.log(this.options);
                }
        }


        @wire(getBasicAccounts)
        getAccountshandle(response){
                this.wiredRefreshData = response;
                if(response.data)
                {
                       
                        this.getAccountsData=response.data;

                        this.getAccountsData = data.map((record) => {
                                return { ...record, pickliostOptioon: this.options};
                              });
                       //this.accountsList=this.getAccountsData.slice(0,3);

                }
        }

        handleSave(event){

                this.saveDraftValues=event.detail.draftValues;
                console.log(this.saveDraftValues);
                console.log(JSON.stringify(this.saveDraftValues));//to convert from proxy to js object
                const vals=JSON.parse(JSON.stringify(this.saveDraftValues));//to convert from js object to JSON format
                console.log(vals);

                const v=vals.map((x=>{
                       return  {fields:x}; //to convert it to {fields:id} format for update record in lwc
                }))

                console.log(v);


              const promises=  v.map((x)=>updateRecord(x));//now each {fields:id} will be passed to update record from array to update all the records.
              Promise.all(promises)//we have to wait till all async communicationm above is done so we use Promise.all()
              .then((response)=>{
                 this.dispatchEvent(new ShowToastEvent({
                        title:'record updation',
                        message:'record updated succesfully',
                        variant:'success'
                 }))
                 this.saveDraftValues=[];
                 refreshApex(this.wiredRefreshData);//we are refreshing data

              }).catch(error=>{
                console.log(error);
              })

            
        }
}