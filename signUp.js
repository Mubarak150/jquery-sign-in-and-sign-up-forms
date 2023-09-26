$(document).ready(function(){
  // bools used in signin click and each eventlistner; 
  var passwordBool = false; 
  var confirmPasswordBool = false; 
  var cnicBool = false;
  var contactBool = false; 
  var emailBool = false; 
  var firstNameBool = false;
  var lastNameBool = false; 
  var fatherNameBool = false; 

  //first name
  var firstNameBox = $(".first-name");
  firstNameBox.on("input", function () {
    var firstName =  firstNameBox.val();  
    firstNameBool = validateName(firstName, firstNameBox, firstNameBox.next(),);
  });
  
  // last name
  var lastNameBox = $(".last-name");
  lastNameBox.on("input", function () {
    var lastName =  lastNameBox.val(); 
    lastNameBool = validateName(lastName, lastNameBox, lastNameBox.next());
  });

  //father name
  var fatherNameBox = $(".father-name");
  fatherNameBox.on("input", function () {
    var fatherName =  fatherNameBox.val(); 
    fatherNameBool = validateName(fatherName, fatherNameBox, fatherNameBox.next());
  });

  // email
  $("#emailAddr").on("input", function(){ 
    mail = $(this).val(); 
    emailBool = validateEmail(mail);
  })

  //CNIC
  $("#cnic").on("input", function(){
    cnic = $(this).val(); 
    cnicBool = validateCNIC(cnic);
   })

   //contact number
  $("#contact").on("input", function(){
    contact = $(this).val();
    contactBool = validateContact(contact);
  })

  // password
  $("#password").on("input", function(){
    password = $(this).val();
    box  = $(this);
    alert = box.next();
    passwordBool = lengthPassword (password, box, alert);
  })

  //confirm password
  $("#confirm-password").on("input", function(){
    confirmPassword = $(this).val();
    box  = $(this);
    alert = box.next();
    confirmPasswordBool = matchPassword (confirmPassword, password, box, alert);
  })

  //when sign up button clicked. 
  $("#sign-up").click(function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    var successNote = $("#h1").next();
    if (firstNameBool && lastNameBool && fatherNameBool && emailBool && contactBool && cnicBool && passwordBool && confirmPasswordBool) {

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
  })

      /////////////////////////////////////////////////////// functions //
      function lengthPassword(password, box, alert) {

        if (password === "") {
          alert.text("* this field is mandatory.");
          box.css( "border", "4px double red" );
          return false; 
        } else if (password.length < 6) {
            alert.text("Password must be at least 6 characters.");
            box.css( "border", "4px double red" );
            return false; 
        } else if (password.length > 10) {
            alert.text("Password cannot be longer than 10 characters.");
            box.css( "border", "4px double red" );
            return false; 
        } else if (password.length >= 6 && password.length <= 10) {
            alert.empty();
            box.css( "border", "4px double green" );
            return true; 
        }
      }
      /////////////////////////////////////////////////////////////////////////

      function matchPassword(confirmPassword, password, box, alert ) {
        if (confirmPassword === "") {
          alert.text("* this field is mandatory.");
          box.css( "border", "4px double red" );
          return false; 
        }
        else if (password !== confirmPassword || confirmPassword !== password ) {
            alert.text("Passwords do not match.");
            box.css( "border", "4px double red" );
            return false;
        }
        else if (password === confirmPassword || confirmPassword === password) {
          box.css( "border", "4px double green" );
          alert.empty();
          return true;
        } 
      }
      ////////////////////////////////////////////////

      function validateEmail(inputText) {

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if( inputText === "") {
          $("#emailAddr").css( "border", "4px double red" );
          $("#emailAddr").next().text("* this field is mandatory");
          return false; 
        }
        else if(inputText.match(mailformat)) {

          $("#emailAddr").css( "border", "4px double green" );
          $("#emailAddr").next().empty();
          return true; 
        }

        else {
          $("#emailAddr").css( "border", "4px double red" );
          $("#emailAddr").next().text("* You have entered an invalid email address!");
          return false; 
        }
      }
      ////////////////////////////////////////////////////

      function validateCNIC(inputNum) {
        var cnicFormat = /^[0-9]{5}-[0-9]{7}-[0-9]$/;

        if(inputNum === "") {
          $("#cnic").css( "border", "4px double red" );
          $("#cnic").next().text("* this field is mandatory");
          return false;
        }
        else if(inputNum.match(cnicFormat)) {

          $("#cnic").css( "border", "4px double green" );
          $("#cnic").next().empty();
          return true;
        }

        else {
          $("#cnic").css( "border", "4px double red" );
          $("#cnic").next().text("* You have entered an invalid CNIC number!");
          return false; 
        }
      }
      ////////////////////////////////

      function validateContact(inputContact) {
        var contactFormat = /^[0][3][0-9]{9}$/;

        if (inputContact === "") {
          $("#contact").css( "border", "4px double red" );
          $("#contact").next().text("* this field is mandatory");
          return false; 
        }
        else if(inputContact.match(contactFormat)) {

          $("#contact").css( "border", "4px double green" );
          $("#contact").next().empty();
          return true; 
        }

        else {
          $("#contact").css( "border", "4px double red" );
          $("#contact").next().text("* You have entered an invalid Contact Number!");
          return false; 
        }
      }
      ////////////////////////////////

      function validateName(name, box, alert) {
        if (name.trim() === "") {
          alert.text("* This field is mandatory.");
          box.css("border", "3px double red");
          return false;
        } else if (name.length < 4) {
          alert.text("* The name is too short.");
          box.css("border", "3px double yellow");
          return false;
        } else {
          var containsSpace = false;
          for (var i = 0; i < name.length; i++) {
            if (name[i] === " ") {
              containsSpace = true;
            //break; // Exit the loop as soon as a space is found
            }
          }
          if (containsSpace) {
            alert.text("* No spaces allowed.");
            box.css("border", "3px double red");
            return false;
          } else {
            alert.empty();
            box.css("border", "3px double green");
            return true;
          }
        }
      }
 });                            // THE END 