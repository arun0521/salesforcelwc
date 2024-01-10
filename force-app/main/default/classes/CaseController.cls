public class CaseController {

    @AuraEnabled(cacheable=true)
    public static Case caseDetails(String idOfCase){
        try {
            return [select Id,Subject,Origin,status from Case where Id=:idOfCase limit 1];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String createCaseForClone(String Subject,String origin,String status){
        Case cs = new Case();
        cs.Subject=Subject;
        cs.Origin=origin;
        cs.Status=status;
        Database.insert(cs);
        return cs.Id;
    }
    
}