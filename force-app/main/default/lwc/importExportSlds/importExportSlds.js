import { LightningElement } from 'lwc';
import { add,Name } from './util';

import {oddoreven} from 'c/myutil'

export default class ImportExportSlds extends LightningElement {



    handleClick(event){
       alert(add(30,10));
        alert(Name);
       oddoreven(10);
    }
    
}