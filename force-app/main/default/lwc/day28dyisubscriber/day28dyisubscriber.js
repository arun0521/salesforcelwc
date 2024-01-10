import { LightningElement ,wire,track} from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleMessageChannel__c';
import { APPLICATION_SCOPE,publish,subscribe,unsubscribe,MessageContext } from 'lightning/messageService';

export default class Day28dyisubscriber extends LightningElement {

        data;

        @track columns=[
                {label:'Id', fieldName: 'Id' },
                {label:'Name', fieldName: 'Name' ,editable:true},
                {label:'Rating', fieldName: 'Rating'},
                {label:'Annual Revenue', fieldName: 'AnnualRevenue' },        
        ];

        @wire(MessageContext)
        currentContext;

        connectedCallback(){
                this.subscribeFunction();
        }

        

        subscribeFunction(){

                //context,channel reference,listener,scope(subscriber options)
                subscribe(this.currentContext,SAMPLEMSG,(message)=>{this.handleIncomingMessage(message)},{scope:APPLICATION_SCOPE});

        }

        handleIncomingMessage(message){

                this.data= message.LMSData.value ? message.LMSData.value : 'No msg';

                

        }
}