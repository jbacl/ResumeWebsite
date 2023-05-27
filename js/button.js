function printDiv() 
{
        window.print();
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
