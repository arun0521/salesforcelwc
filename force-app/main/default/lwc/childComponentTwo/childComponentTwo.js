import EmailPreferencesStayInTouchReminder from '@salesforce/schema/User.EmailPreferencesStayInTouchReminder';
import { api, LightningElement } from 'lwc';

export default class ChildComponentTwo extends LightningElement {

    personinformationchild=[];

    @api 
    set sendpersoninfo(data){
        console.log('child setter');
        console.log(data);
        this.personinformationchild= JSON.parse(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)));


        this.personinformationchild[0].name='raj';
        console.log(this.personinformationchild);

    }

    get sendpersoninfo(){
        return this.personinformationchild[1].name;
    }

} 