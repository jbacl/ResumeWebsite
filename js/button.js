function printDiv() 
{
        var originalScale = document.body.style.transform;
        var originalOverflow = document.body.style.overflow;
    
        document.body.style.transform = "scale(0.55)";
    
        window.print();
    
        document.body.style.transform = originalScale;
}
    

function sendEmail() 
{
        var email = "jacob.baclawski@uconn.edu";
        var subject = "Inquiry";
        var emailBody = 'Hi Jacob, ';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
}

function phoneNumber()
{
        window.open("tel:+18604713592");
}

function redirectPage(Url)
{
        window.open(Url)
}
