import { api, LightningElement, track } from 'lwc';

export default class SetterChildComponent extends LightningElement {

    modifiedPersonInfo;
    
    @api 
    set personinfo(data){
        console.log('person info child func');
        console.log(data);
        //this.modifiedPersonInfo=data;//wont work sinc eits passed as proxy data

        console.log(data.name);
      

       
        
    /*
       this.modifiedPersonInfo = {...data}
       console.log(this.modifiedPersonInfo);

      
       if(this.modifiedPersonInfo.gender=='Male'){
        this.modifiedPersonInfo.name='Mr.'+ `${data.name}`;
       }
       else{
        this.modifiedPersonInfo.name='Miss.'+ `${data.name}`;
       }

       console.log(this.modifiedPersonInfo);
       */
       this.modifiedPersonInfo = {...data,name:data.gender=='Male'?`Mr.${data.name}`:data.gender=='Female'?`Miss.${data.name}`:data.name};
       console.log(this.modifiedPersonInfo);
    }

    
    get personinfo(){
        return this.modifiedPersonInfo.name;
    }

}