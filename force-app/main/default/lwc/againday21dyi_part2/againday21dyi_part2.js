import { LightningElement, wire } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class Againday21dyi_part2 extends LightningElement {


        accountfielddata={};
        options=[];
        masterRecordId;
        IndustryOptions=[];
        value;
        valueOfIndustry;

        //from Account object we get Recordtype
        @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
        getAccountInfo({data,error})
        {
                if(data){
                       // console.log(data.recordTypeInfos);

                        for(let key in data.recordTypeInfos){
                                const{name,recordTypeId}=data.recordTypeInfos[key];//here i am destructring array based on the needed values name and recordTypeId
                                const test={
                                        label:name,
                                        value:recordTypeId,
                                }
                                this.options.push(test);//create an js object and mapped it to values and pushed it to object array format as needed in a combobox options

                        }
                        console.log('the options are');
                        console.log(this.options);

                        this.masterRecordId=this.options.map((x)=>{
                                if(x.label=='Master'){
                                        return x.value;
                                }
                        });
                        this.masterRecordId=this.masterRecordId[0];
                        console.log('the master record id');
                        console.log(this.masterRecordId);

                }
                if(error){
                        console.log(error);
                }
        }

        
        @wire(getPicklistValues,{recordTypeId:'$masterRecordId',fieldApiName: INDUSTRY_FIELD })
        picklistData({data,error})
        {
                if(data){
                        console.warn(data);
                       this.IndustryOptions =  data.values.map((x)=>{//works only if it is an array
                                //console.warn(x);
                                return { label: x.label, value: x.value }
                        });
                        console.log('Industry options are ')
                        console.log(this.IndustryOptions);

                }
                if(error){

                }
        }




        handlechange(event){

                if(event.target.name!='Industry'){
                        const{name,value}=event.target;
                        this.accountfielddata[name]=value;
                }
                       
        }

        handlecmbChange(event){
                console.log('event for cmb is');
                console.log(event.target.name);
               
                let name = event.target.name;
                let value = event.detail.value;

                this.accountfielddata[name]=value;
               
        }

        handleClick(event){

                const fields = { fields: this.accountfielddata };

                console.log('save button clicked data sent is ');
                console.log(fields);
                updateRecord(fields).then(response=>{
                        console.log(response);
                        this.accountfielddata={};
                })
        }
}