
function SendMail(sRecipientMail, sSubject, sMsgBody)   
{   
    try   
    {   
        // create a session and log on -- username and password in profile    
        var refMsg = WScript.CreateObject("CDO.Message");   
        var refConf = WScript.CreateObject("CDO.Configuration");   
           
        // Setting configuration params   
        with(refConf.Fields)   
        {   
            Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.mail.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2; 
            Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1;  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = sRecipientMail;  
            Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "****"; 
        }   
        refConf.Fields.Update();   
   
        with(refMsg)   
        {   
            Configuration = refConf;
            To       = "nikkazakov909@gmail.com";   
            From     = sRecipientMail;   
            Subject  = sSubject;   
            TextBody = sMsgBody;
        } 
  
        refMsg.Send();
    }    
    catch(e)   
    {   
        WScript.Echo("SendMail error !!! : " + e.description);   
        WScript.Quit(1);   
    }   
}
