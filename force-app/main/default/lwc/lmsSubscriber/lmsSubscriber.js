import { LightningElement,wire } from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleMessageChannel__c';
import { APPLICATION_SCOPE,publish,subscribe,unsubscribe,MessageContext } from 'lightning/messageService';

export default class LmsSubscriber extends LightningElement {


        lmsMessage;

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

                this.lmsMessage= message.LMSData.value ? message.LMSData.value : 'No msg';

        }

}