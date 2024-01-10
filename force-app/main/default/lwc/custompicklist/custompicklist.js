import { LightningElement } from 'lwc';
import LightningDatatable from "lightning/datatable";
import ratingpicklist from "./ratingpicklist.html"
 

export default class Custompicklist extends LightningDatatable {
        static customTypes = {
                comboBox:{
                        template:ratingpicklist,
                        standardCellLayout:true,
                        typeAttributes:['label','value','placeholder','options']
                }
        }

}