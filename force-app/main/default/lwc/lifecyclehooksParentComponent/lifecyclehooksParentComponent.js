import { LightningElement } from 'lwc';

export default class LifecyclehooksParentComponent extends LightningElement {

    message;
    constructor(){
        super();
        console.log('Constructor from parent');
    }

    connectedCallback(){
        console.log('connectedCallback from parent');
        //1.cannot acess 
        //inputs,buttons-controls
        //2.can acess
        //fetch api
        //apex calls 
        //used for loading data
        //this.template.querySelector('.finput').value='name';//don't do this in connected callback only after loading we can acess inputs,controls
        let x = setInterval(()=>{
            console.log('interval block');
            this.message='hai welcome';
            clearInterval(x);
        },1000);
    
    }

    renderedCallback(){
        console.log('renderedCallback from parent');

        //here we can access the components
         this.template.querySelector('.finput').value='name';
      
        
    }

    disconnectedCallback(){
        console.log('disconnectedCallback from parent');
    }

    errorCallback(error,stack){
        console.log('errorCallback from parent');
    }

    handleClick(event){
        console.log('handle click for button called');
        this.message='handle click';

    }



}