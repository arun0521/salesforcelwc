public class ReceiptController {

    @AuraEnabled
    public static String createReceipt(Integer amount,String modeofpay,Date paiddate,String contactid){
        try {
            Receipt__c rec=new Receipt__c();
            rec.Amount__c=amount;
            rec.Mode_Of_Pay__c=modeofpay;
            rec.Amount_Paid_Date__c=paiddate;
            rec.Contact__c=contactid;
            Database.insert(rec);
            return rec.Id;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}