import { LightningElement } from 'lwc';

export default class Againday8_dyipart2 extends LightningElement {
        Welcome='Hello there! welcome'

        classnameused;

        handleBlueClick(event){
                this.classnameused='blue';
        }
        handleRedClick(event){
                this.classnameused='red';
        }
}