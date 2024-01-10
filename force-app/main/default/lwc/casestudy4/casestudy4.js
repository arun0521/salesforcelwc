import { LightningElement, api, wire } from 'lwc';
import caseDetails from '@salesforce/apex/CaseController.caseDetails';
import createCaseForClone from '@salesforce/apex/CaseController.createCaseForClone';
import { NavigationMixin } from "lightning/navigation";
import { ShowToastEvent } from "lightning/platformShowToastEvent";


export default class Casestudy4 extends NavigationMixin(LightningElement) {


        @api recordId;

        caseStatus;
        caseOrigin;
        caseSubject;

        @wire(caseDetails,{idOfCase:'$recordId'})
        cadeDetails({data,error})
        {
                if(data){
                        console.log('case info::');
                        console.log(data);

                        this.caseStatus=data.status;

                        this.caseOrigin=data.origin;

                        this.caseSubject=data.subject;


                }
        }

        @api invoke(){
                

                createCaseForClone({Subject:this.caseSubject,origin:this.caseOrigin,status:this.caseStatus})
                .then(response=>{
                        this.dispatchEvent(new ShowToastEvent({
                                title: "title",
                                message: "case cloned with id  " +response,
                                variant: "success"


                        }))
                }).catch(error=>{
                        this.dispatchEvent(new ShowToastEvent({
                                title: "title",
                                message: "unable to clone record " +error.body.pageErrors[0].message,
                                variant: "error"

                        }))
                })
        }




}