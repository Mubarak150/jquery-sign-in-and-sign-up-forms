$(document).ready(function(){
  

    // Definitions:
    var boolMail = false;
    var boolPass = false;
  
    var signIn = $("#sign-in");
    var emailBox = $("#emailAddr");
    var passwordBox = $("#password");
    var successNote = $("#h1").next();
  
    // Event for E-Mail:
    emailBox.on("input", function(){
      var email = emailBox.val(); 
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        boolMail = false;
        if (email === "") {
          emailBox.next().text("* this field is mandatory.") ;
          emailBox.css("border","4px double red" );
          boolMail = false;
        } 
        else if(email.match(mailformat)) {
            emailBox.css("border","4px double green" );
            emailBox.next().text("");
            boolMail = true;
          }
        
          else {
            emailBox.css("border","4px double red" );
            emailBox.next().text("* You have entered an invalid email address!");
            boolMail = false;
          }
   })
  
      // Event for Password: 
      passwordBox.on("input", function(){
      var password = passwordBox.val();
          var alert = signIn.next();
          boolPass = false;
          
        if (password === "") {
            alert.text("* this field is mandatory.") ;
            passwordBox.css("border","4px double red" );
            boolPass = false; 
        } 
        else if (password.length < 6) {
            alert.text("Password must be at least 6 characters.");
            passwordBox.css("border","4px double red" );
            boolPass = false;
        } 
        else if (password.length > 10) {
            alert.text("Password cannot be longer than 10 characters.") ;
            passwordBox.css("border","4px double red" );
            boolPass = false;
        }
         else if (password.length >= 6 && password.length <= 10) {
            alert.text("");
            passwordBox.css("border","4px double green" );
            boolPass = true;
        }
      })
  
  // Event for sign-up CLICK:
  signIn.on("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Check if both boolMail and boolPass are true
    if (boolMail && boolPass) {
      
      successNote.text("you are successfully signed up");
      successNote.css("border","1px solid white");
      successNote.css("padding","3px");
      successNote.css("backgroundColor","#10B981");  
  
      // Add a delay before reloading the page
      setTimeout(function() {
        location.reload(); // Reload the page
      }, 1000); // 1000 milliseconds = 1 seconds
    }
  
    else {
      successNote.text("Please fill the credentials as prescribed");
      successNote.css("border","1px solid white");
      successNote.css("padding","3px");
      successNote.css("backgroundColor","red");  
    }
  });
      
  });