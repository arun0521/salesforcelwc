import { LightningElement, wire } from 'lwc';
import SAMPLEMSG from '@salesforce/messageChannel/SimpleMessageChannel__c';
import { APPLICATION_SCOPE,publish,subscribe,unsubscribe,MessageContext } from 'lightning/messageService';

export default class LmsPublisher extends LightningElement {


        @wire(MessageContext)
        currentContext;


        message;
        handleevent(event){
                this.message=event.target.value;
        }

        handleClick(event){

                const msg={
                        LMSData:{
                                value:this.message
                        }  
                }

               // console.log(this.message);

                publish(this.currentContext,SAMPLEMSG,msg);

        }

        
}