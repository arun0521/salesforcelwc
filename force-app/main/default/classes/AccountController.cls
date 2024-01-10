public class AccountController {

   
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String RatingValue){
        return [Select Id,Name,Industry,Rating,AnnualRevenue from Account Where Rating=:RatingValue];
    }


    @AuraEnabled(cacheable=true)
    public static Account getAccountInfo(String recordIdofAccount){
        
            return [Select Id,Name,Rating,AnnualRevenue From Account where Id=:recordIdofAccount Limit 1];
        
    }
    


    @AuraEnabled(cacheable=true)
    public static List<Account> getBasicAccounts(){
        try {
            return [Select Id,Name,Industry,Rating,AnnualRevenue from Account Limit 500];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled
    public static void updateAnnualRevenue(String id){

        Account acc=new Account();
        acc.Id=id;
        acc.AnnualRevenue=44000;
        update acc;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsWithName(String name){
        try {
            
            return [Select Id,Name,AccountNumber,BillingState  from Account where Name like:name];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled(cacheable=true)
    public static Account getAccountAddress(String accountInfo){
        
        try {
            return [Select Id,BillingCity,BillingState,BillingStreet,BillingPostalCode from account where Id=:accountInfo limit 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        
    }
}