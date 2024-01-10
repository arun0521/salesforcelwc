import { LightningElement } from 'lwc';

export default class Againday8_dyipart1 extends LightningElement {
output;

var1;
var2;



handleinputone(event){
        this.var1=Number(event.target.value);
        event.target.title;
}

handleinputtwo(event){
        this.var2=Number(event.target.value);
}

handleAddClick(event){
      this.output=this.var1+this.var2;  
      console.log(event.target.title);
      switch(event.target.title) {
            case 'Add':
                  this.output=this.var1+this.var2; 
              break;
            case 'Sub':
                  this.output=this.var1-this.var2; 
              break;
              case 'Mul':
                  this.output=this.var1*this.var2; 
              break;
              case 'Div':
                  this.output=this.var1/this.var2; 
              break;
            default:
                  this.output=' ';
          }
}


  handleClearClick(event){
        this.output=' ';  
        this.var1='';
        this.var2='';
       // this.template.querySelector('lightning-input[`name`="txtinput1"]').value='';

        //this.template.querySelector('lightning-input[name="txtinput2"]').value='';
  }

}