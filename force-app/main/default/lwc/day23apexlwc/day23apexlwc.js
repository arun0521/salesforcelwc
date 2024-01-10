import { LightningElement,api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import createContactHere from '@salesforce/apex/ContactController.createContactHere'
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { deleteRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';
import updateAnnualRevenue from '@salesforce/apex/AccountController.updateAnnualRevenue';
import getBasicAccounts from '@salesforce/apex/AccountController.getBasicAccounts';




 

export default class Day23apexlwc extends LightningElement {
        saveDraftValues;

        wiredRefreshData;

       

         actions = [
                { label: 'View', name: 'view' ,iconName:'utility:preview'},
                { label: 'Edit', name: 'edit' ,iconName:'utility:edit'},
                { label: 'Delete', name: 'delete' ,iconName:'utility:delete'},
            ];
       
        @api recordId;

        columns=[
                {label:'Id', fieldName: 'Id' },
                {label:'Name', fieldName: 'Name' ,editable:true},
                {label:'Rating', fieldName: 'Rating' },
                {label:'Annual Revenue', fieldName: 'AnnualRevenue' },
                {   label: 'Action',
                    type: 'action',
                    initialWidth:'50px',
                         typeAttributes: { rowActions: this.actions },
                }
                
        ];
       

       // @wire(getBasicAccounts)
        getAccountsData;

        accountsList;


        getSelectedRow(event){//when we need to get the selected checbox row detail
                const rows=event.detail.selectedRows;

                console.log('Selected rows :: '+JSON.stringify(rows));

                alert(JSON.stringify(rows));

                



        }

       

        handleClick(event){

                //const rows = this.template.querySelector('lightning-datatable').getSelectedRows();

               // console.log('rows from datatable :: ' +JSON.stringify(rows));

        }

        deleteId;
        deleteName;
        handleRowAction(event){//when an icon is clicked and we need to paritucular action
                 const actionName = event.detail.action.name;
                 const row = event.detail.row;

                 console.log('action name ::'+actionName);
                 console.log('row details ::'+row);
  
                 this.deleteId=row.Id;

                 this.deleteName=row.Name;


                 //alert(this.deleteId);
                 //alert(this.deleteName);

                console.warn(this.deleteId);

                console.warn(this.deleteName);

                switch (actionName) {
                        case 'view':
                            break;
                        case 'edit':
                            break;
                        case 'delete':
                            console.warn('inside '+actionName);
                            this.deleteAccount(this.deleteId);
                            this.refreshData();
                            break;
                    }
             
        }

        refreshData(){
                return refreshApex(this.wiredRefreshData);

        }


        deleteAccount(deleteId){

                console.warn(deleteId);


                deleteRecord(deleteId).then((response)=>{
                        this.dispatchEvent(new ShowToastEvent({
                                title: "Success",
                                message: "Record deleted " +this.deleteName,
                                variant: "success",
                        }))
                }).catch(error=>{
                        this.dispatchEvent(new ShowToastEvent({
                                title: "Error deleting record",
                                message: error.body.message,
                                variant: "error",
                        }))
                })
        }


        @wire(getBasicAccounts)
        getAccountshandle(response){
                this.wiredRefreshData = response;
                if(response)
                {
                       
                        this.getAccountsData=response.data;
                       //this.accountsList=this.getAccountsData.slice(0,3);

                }
        }

        handleSave(event){
                this.saveDraftValues=event.detail.draftValues;

                this.saveDraftValues =  this.saveDraftValues.slice();

                console.log(this.saveDraftValues);

                const recInput = {fields: this.saveDraftValues};

                console.log(recInput);

        }
       

      



}