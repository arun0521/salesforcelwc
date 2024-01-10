import { LightningElement } from 'lwc';
import modalheader from './modalheader.html'
import showmodal from './showmodaldemo.html'
import doit from './doityourselfrender1.html'

export default class Doityourselfrender1 extends LightningElement {

    flag=false;

    render(){
        if(this.flag==false){
            return showmodal
        }
        else if(this.flag==true){
            return modalheader
        }
        else{
            return doit
        }
        
    }

    handleModal(event){
        this.flag=true;
    }

    handlecancel(event){
        this.flag=false;
    }

    handlesave(event){
        this.flag=false;
    }
}