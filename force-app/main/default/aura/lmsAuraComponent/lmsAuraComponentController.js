({
    handleMessage : function(component, message, helper) {

        console.log(message.getParam("LMSData").value)

        component.set("v.message",message.getParam("LMSData").value)

    },

    handleChange : function(component, event, helper) {

        

        component.set("v.messageToPublish",component.find("txtMessage").get("v.value"))



    },
    publishMessage : function(component, event, helper) {

        let message=component.get("v.messageToPublish");

        const msgData={
            LMSData:{
                    value:message
            }  
    }

    component.find("SimpleMessageChannel").publish(msgData);


    }
})
