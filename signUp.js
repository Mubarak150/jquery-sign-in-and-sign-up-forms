$(document).ready(function(){
  var name = "";
  var box = ""; 
  var alert = ""; 
  // var successNote = $("#h1").next();
  
  var passwordBox = $("#password"); 
  var confirmPasswordBox = $("#confirm-password");
  var firstNameBox = $(".first-name");
  var lastNameBox = $(".last-name"); //.val();
  var fatherNameBox = $(".father-name"); //.val();
  var cnicBox =  $("#cnic");
  var contactBox =  $("#contact");
  var emailBox = $("#emailAddr"); // .val(); 

  var passwordBool = false; 
  var confirmPasswordBool = false; 
  var cnicBool = false;
  var contactBool = false; 
  var emailBool = false; 
  var firstNameBool = false;
  var lastNameBool = false; 
  var fatherNameBool = false; 
 // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
 
  var inputBool ;
  $(".name").on("input", function () {
    var inputValue = $(this).val();
    if ($(this).hasClass("first-name")) {
      firstName = inputValue;
      firstNameBool = inputBool; 
    } else if ($(this).hasClass("last-name")) {
      lastName = inputValue;
      lastNameBool = inputBool; 
    } else if ($(this).hasClass("father-name")) {
      fatherName = inputValue;
      fatherNameBool = inputBool;
    }
    validateName(inputValue, $(this), $(this).next(), inputBool);
    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
    
  });

  $("#emailAddr").on("input", function(){ 
    mail = $(this).val(); 
    validateEmail(mail, emailBool);
    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#cnic").on("input", function(){
    cnic = $(this).val(); 
    validateCNIC(cnic, cnicBool );

    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#contact").on("input", function(){
    contact = $(this).val();
    validateContact(contact, contactBool);
    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#password").on("input", function(){
    password = $(this).val();
    box  = $(this);
    alert = box.next();
    lengthPassword (password, box, alert, passwordBool);
    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#confirm-password").on("input", function(){
    confirmPassword = $(this).val();
    box  = $(this);
    alert = box.next();
    matchPassword (confirmPassword, password, box, alert, confirmPasswordBool);
    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#sign-up").click(function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // firstName === "" || lastName === "" || fatherName === "" || cnic === "" || contact === "" || email === "" || password === "" || confirmPassword === "" || !matchPassword() || !lengthPassword() || !validateEmail() || !validateContact() || !validateCNIC() 
    var successNote = $("#h1").next();
    // updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
    if (firstNameBool && lastNameBool && fatherNameBool && emailBool && contactBool && cnicBool && passwordBool && confirmPasswordBool) {

      successNote.text("Please fill the credentials as prescribed");
      successNote.css("border","1px solid white");
      successNote.css("padding","3px");
      successNote.css("backgroundColor","red"); 

    } 
    
    else {

      successNote.text("you are successfully signed up");
      successNote.css("border","1px solid white");
      successNote.css("padding","3px");
      successNote.css("backgroundColor","#10B981");  
  
      // Add a delay before reloading the page
      setTimeout(function() {
        location.reload(); // Reload the page
      }, 1000); // 1000 milliseconds = 1 seconds
    }
  
  })





/////////////////////////////////////////////////////// functions //
function lengthPassword(password, box, alert, pBool) {

  if (password === "") {
    alert.text("* this field is mandatory.");
    box.css( "border", "4px double red" );
    pBool = false; 
    return pBool;
  } else if (password.length < 6) {
      alert.text("Password must be at least 6 characters.");
      box.css( "border", "4px double red" );
      pBool = false; 
      return pBool;
  } else if (password.length > 10) {
      alert.text("Password cannot be longer than 10 characters.");
      box.css( "border", "4px double red" );
      pBool = false; 
      return pBool;
  } else if (password.length >= 6 && password.length <= 10) {
      alert.empty();
      box.css( "border", "4px double green" );
      pBool = true; 
      return pBool;
  }
}
/////////////////////////////////////////////////////////////////////////
function matchPassword(confirmPassword, password, box, alert, cpBool ) {
  if (confirmPassword === "") {
    alert.text("* this field is mandatory.");
    box.css( "border", "4px double red" );
    cpBool = false; 
    return cpBool;
  }
  else if (password !== confirmPassword || confirmPassword !== password ) {
      alert.text("Passwords do not match.");
      box.css( "border", "4px double red" );
      cpBool = false; 
      return cpBool;
  }
  else if (password === confirmPassword || confirmPassword === password) {
    box.css( "border", "4px double green" );
    alert.empty();
    cpBool = true; 
    return cpBool;
  } 
}
////////////////////////////////////////////////

function validateEmail(inputText, mBool) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if( inputText === "") {
    $("#emailAddr").css( "border", "4px double red" );
    $("#emailAddr").next().text("* this field is mandatory");
    mBool = false; 
    return mBool;
  }
  else if(inputText.match(mailformat)) {

    $("#emailAddr").css( "border", "4px double green" );
    $("#emailAddr").next().empty();
    mBool = true; 
    return mBool;
  }

  else {
    $("#emailAddr").css( "border", "4px double red" );
    $("#emailAddr").next().text("* You have entered an invalid email address!");
    mBool = false; 
    return mBool;
  }
}

////////////////////////////////////////////////////

function validateCNIC(inputNum, cnBool ) {
  var cnicFormat = /^[0-9]{5}-[0-9]{7}-[0-9]$/;

  if(inputNum === "") {
    $("#cnic").css( "border", "4px double red" );
    $("#cnic").next().text("* this field is mandatory");
    cnBool = false; 
    return cnBool;
  }
  else if(inputNum.match(cnicFormat)) {

    $("#cnic").css( "border", "4px double green" );
    $("#cnic").next().empty();
    cnBool = true; 
    return cnBool;
  }

  else {
    $("#cnic").css( "border", "4px double red" );
    $("#cnic").next().text("* You have entered an invalid CNIC number!");
    cnBool = false; 
    return cnBool;
  }
}
////////////////////////////////

function validateContact(inputContact, coBool) {
  var contactFormat = /^[0][3][0-9]{9}$/;

  if (inputContact === "") {
    $("#contact").css( "border", "4px double red" );
    $("#contact").next().text("* this field is mandatory");
    coBool = false; 
    return coBool;
  }
  else if(inputContact.match(contactFormat)) {

    $("#contact").css( "border", "4px double green" );
    $("#contact").next().empty();
    coBool = true; 
    return coBool;
  }

  else {
    $("#contact").css( "border", "4px double red" );
    $("#contact").next().text("* You have entered an invalid Contact Number!");
    coBool = false; 
    return coBool;
  }
}
////////////////////////////////

function validateName (name, box, alert, inputBool) {
    if(name === "") {
      alert.text("* this field is mandatory.");
      box.css( "border", "3px double red" );
      inputBool = false; 
      return inputBool
    }
    else if (name.length > 0 && name.length < 4 ) {
      for (var i = 0; i < name.length; i++) {
        if(name[i] === " ") {
          alert.text("* no spaces allowed.");
          box.css( "border", "3px double red" );
          inputBool = false; 
          return inputBool;
        }
      
        else {
          alert.text("* the name is too short.");
          box.css( "border", "3px double yellow" );
          inputBool = false; 
          return inputBool; 
        }
      }
      
    }

    else if (name.length >= 4) {
      for (var i = 0; i < name.length; i++) {
        if(name[i] === " ") {
          alert.text("* no spaces allowed.");
          box.css( "border", "3px double red" );
          inputBool = false; 
          return inputBool; 
        }
      
        else {
          alert.empty();
          box.css( "border", "3px double green" );
          inputBool = true; 
          return inputBool; 
        }
      }
    }

  }

  /////////////checking sign in ///
  // disabling sign up button if 
  function updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC) {
    var successNote = $("#h1").next();
    if (firstName === "" || lastName === "" || fatherName === "" || cnic === "" || contact === "" || email === "" || password === "" || confirmPassword === "" || !matchPassword() || !lengthPassword() || !validateEmail() || !validateContact() || !validateCNIC() ) {

      successNote.text("Please fill the credentials as prescribed");
      successNote.css("border","1px solid white");
      successNote.css("padding","3px");
      successNote.css("backgroundColor","red"); 

    } 
    
    else {

      successNote.text("you are successfully signed up");
      successNote.css("border","1px solid white");
      successNote.css("padding","3px");
      successNote.css("backgroundColor","#10B981");  
  
      // Add a delay before reloading the page
      setTimeout(function() {
        location.reload(); // Reload the page
      }, 1000); // 1000 milliseconds = 1 seconds
    }
   };
  });