import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, track, wire } from 'lwc';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import Account_object from '@salesforce/schema/Account'

export default class Againday21_part1dyi extends LightningElement {


        options;
        value='';
         masterRecordId;
        IndustryOptions=[];
        valueOfIndustry;


        //from Account object we get Recordtype
        @wire(getObjectInfo,{objectApiName:Account_object})
        getAccountInfo({data,error})
        {
                if(data){
                       // console.log(data.recordTypeInfos);
                        const values = data.recordTypeInfos;
                        this.options=[];//declare array just before looping to avoid proxy
                        for(let key in values){
                                const{name,recordTypeId}=values[key];//here i am destructring array based on the needed values name and recordTypeId
                                const test={
                                        label:name,
                                        value:recordTypeId,
                                }

                                this.options.push(test);//create an js object and mapped it to values and pushed it to object array format as needed in a combobox options


                        }
                        console.log('the options are before');
                        
                        console.log(this.options);

                        this.masterRecordId=this.options.map((x)=>{
                                if(x.label=='Master'){
                                        return x.value;
                                }
                        });
                        this.masterRecordId=this.masterRecordId[0];

                }
                if(error){
                        console.log(error);
                }
        }

        @wire(getPicklistValues,{recordTypeId:'$masterRecordId',fieldApiName: INDUSTRY_FIELD })
        picklistData({data,error}){
                if(data){
                        this.IndustryOptions=[];
                        console.log('picklist data is ');
                        console.log(data);

                        this.IndustryOptions=data.values.map((x)=>{
                                return {label:x.label,value:x.value}
                        });
                        console.log('Industry options are ')
                        console.log(this.IndustryOptions);
                }
                if(error){

                }
        }

        handleChange(event){
                this.value=event.detail.value;
                this.masterRecordId=this.value;
                console.log('the value is '+this.masterRecordId);

        }

        handleChangeIndustry(event){
                this.valueOfIndustry=event.detail.value;
        }
        
}