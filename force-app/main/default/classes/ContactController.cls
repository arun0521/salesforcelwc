public class ContactController {


    @AuraEnabled
    public static String createContactHere(String lastName,String firstName,Date birthdate,String email,String department){
        Contact con = new Contact();
        con.LastName=lastName;
        //con.Phone=Phone;
        //con.AccountId=recordId;

        con.FirstName=firstName;
        con.Birthdate=birthdate;
        con.Email=email;
        con.Department=department;

        Database.insert(con);       
        return con.Id;
    }


    @AuraEnabled(cacheable=true)
    public static List<Contact> relatedContacts(String idOfAcc){
        try {
            return [Select Id,Name,Phone,Email from Contact where AccountId =:idOfAcc];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}