import { LightningElement } from 'lwc';
import LightningDatatable from "lightning/datatable";
import progressring from './progressring.html'


export default class Customdatatable extends LightningDatatable {

        static customTypes = {
                progRing:{
                        template:progressring
                }
        }


}