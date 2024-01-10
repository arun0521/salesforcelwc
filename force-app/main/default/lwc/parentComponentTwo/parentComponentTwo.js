import { track,api, LightningElement, wire } from 'lwc';
import contactrender from './contactTemplate.html';
import accountrender from './accountTemplate.html';
import parentrender from './parentComponentTwo.html';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getFieldValue, getRecord,getRecordUi } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfos,getObjectInfo } from 'lightning/uiObjectInfoApi';

//const objectInfos = [ACCOUNT_OBJECT,CONTACT_OBJECT];

const fields =[NAME_FIELD,INDUSTRY_FIELD,RATING_FIELD,ANNUALREVENUE_FIELD];

export default class ParentComponentTwo extends LightningElement {

     accountInfo;
     userInfo;
     objectInfo;
     objectInfos = [ACCOUNT_OBJECT,CONTACT_OBJECT];

     fieldsList=[];

     fieldcount;
     customFieldCount=0;
     recordTypeCount;
     apiFieldNamesList=[];
     pickListNumber=0;

     @api recordId;

     //push into a local array to access through index
     allfieldsApiNames=[];
    

     /*
     
     @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
     getObjectdata({data,error}){
        if(data){
            console.warn('inside data');
            console.warn(data);
            this.objectInfo=data;
            this.fieldsList=data.fields;
            console.warn(this.fieldsList);
            this.fieldcount= Object.keys(this.fieldsList).length;

            //not working
           // console.warn(this.fieldsList[4]);
           
            //using foreach works to get custom name
            for(let key in data.fields){
               if((key.endsWith('__c'))){
                 console.warn(key);
                 this.customFieldCount++;
               }
               
            }

            //adding api names to array
            for(let key in this.fieldsList){
                this.allfieldsApiNames.push(this.fieldsList[key].apiName);
             }

             //trying to get picklist in fields
             for(let key in this.fieldsList){
               //console.warn(this.fieldsList[key].dataType);
                if(this.fieldsList[key].dataType=='Picklist'){
                    this.pickListNumber++;
                }
             }


             console.warn(this.allfieldsApiNames);

             this.recordTypeCount =Object.keys(JSON.parse(JSON.stringify(data.recordTypeInfos))).length;


            //trying to print individual field values//not working
            data.fields.map((x)=>{
                console.log(x);
            });

            
           

           

        }
        else if(error){
            console.warn(error);
        }
     }
     
*/

     handleClick(event){
      console.warn(this.getrecordsdata);


     }

        objectdestrucExample(){
            const person={name:'ABC',age:27,city:'delhi'};

            const {name,age}=person;//here we have to use the same key as above to destructure and the store the value in the new object
        }



}