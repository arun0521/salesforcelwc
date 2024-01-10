import { LightningElement ,track,wire} from 'lwc';
import getBasicAccounts from '@salesforce/apex/AccountController.getBasicAccounts';
import { NavigationMixin } from 'lightning/navigation';
import LightningModal from 'lightning/modal';
import getAccountInfo from '@salesforce/apex/AccountController.getAccountInfo';



export default class Day27dyi_part1 extends LightningModal {


        @track data = []; 
        wiredRefreshData;
        totalRecordCount=0;
        items;
        @track startingRecord=1;
        @track endingRecord=0;

        @track isShowModal = false;

       @track accountName;
       @track accountRating;
       @track annualRevenue;



        actions = [
                { label: 'View', name: 'view' ,iconName:'utility:preview'},
                { label: 'Edit', name: 'edit' ,iconName:'utility:edit'},
                { label: 'Delete', name: 'delete' ,iconName:'utility:delete'},
            ];



        @track columns=[
                {label:'Id', fieldName: 'Id' },
                {label:'Name', fieldName: 'Name' ,editable:true},
                {label:'Rating', fieldName: 'Rating'},
                {label:'Annual Revenue', fieldName: 'AnnualRevenue' },
                {   label: 'Action',
                    type: 'action',
                    initialWidth:'50px',
                         typeAttributes: { rowActions: this.actions },
                }
                
        ];
        @track selectedRows = [];
        maxRowSelection = 10;
        page = 1;
        pageSize = 10;


        @wire(getBasicAccounts)
        getAccountshandle(response){
                this.wiredRefreshData = response;
                if(response.data)
                {
                        this.items=response.data;
                        
                        this.totalRecordCount=this.items.length;

                        console.log("wire response ::");
                        console.log(response);


                        this.data=this.items.slice(0,this.pageSize);

                        this.endingRecord=this.pageSize;

                }
        }
    
        handlePrevious() {
            if (this.page > 1) {
                this.page =this.page - 1;
                this.displayRecordsPerPage(this.page);
            }
        }
    
        handleNext() {
            if (this.page < Math.ceil( this.totalRecordCount / this.pageSize)) {
                this.page = this.page + 1;
                this.displayRecordsPerPage(this.page);
            }
        }

        displayRecordsPerPage(page){
                this.startingRecord=(page-1)*this.pageSize;//if pagae 2 then 1*10=10 starting point
                this.endingRecord=(page)*this.pageSize;//2*10-->end point

                this.endingRecord=(this.endingRecord>this.totalRecordCount)?this.totalRecordCount:this.endingRecord;

                this.data=this.items.slice(this.startingRecord,this.endingRecord);

                this.startingRecord =this.startingRecord+1;

        }
    
        get disablePrevious() {
            return this.page === 1;
        }
    
        get disableNext() {
            return this.page >= Math.ceil(this.totalRecordCount / this.pageSize);
        }

        rrecordId;
        recordName;

        hideModalBox(){
            console.log('inside hide modal');
            this.isShowModal=false;
            
        }

        /*
        @wire(getAccountInfo,{recordIdofAccount:'$rrecordId'})
        accountData;
        */
        
        handleRowAction(event){
            const actionName = event.detail.action.name;
                 const row = event.detail.row;

                 console.log('action name ::'+actionName);
                 console.log('row details ::'+row);
                 console.log(row); 
                

                switch (actionName) {
                        case 'view':
                            console.warn('inside '+actionName);

                            this.rrecordId=row.Id;

                            this.recordName=row.Name;

                            this.accountName=row.Name;

                            this.accountRating=row.Rating;

                            this.annualRevenue=row.AnnualRevenue;
           
                            //alert(this.deleteId);
                            //alert(this.deleteName);
           
                           console.warn(this.rrecordId);
           
                           console.warn(this.recordName);
                        /*
                            this[NavigationMixin.GenerateUrl]({
                                type: "standard__recordPage",
                                attributes: {
                                    recordId: this.rrecordId,
                                    actionName: "view"
                                }
                            }).then((url) => {
                                window.open(url, "_blank");
                            });
                            */
                           
                           this.handleView(row);
                            break;
                        case 'edit':
                            break;
                        case 'delete':
                            console.warn('inside '+actionName);
                            break;
                    }
        }
        
        handleView(row){

                this.isShowModal=true;

        }

}