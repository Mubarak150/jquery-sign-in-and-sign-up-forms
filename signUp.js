$(document).ready(function(){
  var name = "";
  var box = ""; 
  var alert = ""; 
  
  var password = $("#password").val(); 
  var confirmPassword = $("#confirm-password").val();
  var firstName = "";
  var lastName = ""; //$(".last-name").val();
  var fatherName = ""; //$(".father-name").val();
  var cnic =  $("#cnic").val();
  var contact =  $("#contact").val();
  var email = ""; // $("#emailAddr").val(); 
 updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  

  $(".name").on("input", function () {
    var inputValue = $(this).val();
    if ($(this).hasClass("first-name")) {
      firstName = inputValue;
    } else if ($(this).hasClass("last-name")) {
      lastName = inputValue;
    } else if ($(this).hasClass("father-name")) {
      fatherName = inputValue;
    }
    validateName(inputValue, $(this), $(this).next());
    updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
    
  });

  $("#emailAddr").on("input", function(){
    mail = $(this).val();
    validateEmail(mail);
    updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#cnic").on("input", function(){
    cnic = $(this).val();
    validateCNIC(cnic);
    updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#contact").on("input", function(){
    contact = $(this).val();
    validateContact(contact);
    updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#password").on("input", function(){
    password = $(this).val();
    box  = $(this);
    alert = box.next();
    lengthPassword (password, box, alert);
    updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#confirm-password").on("input", function(){
    confirmPassword = $(this).val();
    box  = $(this);
    alert = box.next();
    matchPassword (confirmPassword, box, alert);
    updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })

  $("#sign-up").click(function() {
    alert("sign in succeeded")
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
function matchPassword(confirmPassword, box, alert) {
  if (confirmPassword === "") {
    alert.text("* this field is mandatory.");
    box.css( "border", "4px double red" );
    return false;
  }
  else if (password !== confirmPassword) {
      alert.text("Passwords do not match.");
      box.css( "border", "4px double red" );
      return false;
  }
  else {
    box.css( "border", "4px double green" );
    alert.empty();
    return true;
  } 
}
////////////////////////////////////////////////

function validateEmail(inputText) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)) {

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
  if(inputNum.match(cnicFormat)) {

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
  if(inputContact.match(contactFormat)) {

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

function validateName (name, box, alert) {
    if(name == "") {
      alert.text("* this field is mandatory.");
      box.css( "border", "3px double red" );
    }
    else if (name.length > 0 && name.length < 4 ) {
      for (var i = 0; i < name.length; i++) {
        if(name[i] === " ") {
          alert.text("* no spaces allowed.");
          box.css( "border", "3px double red" );
          return;
        }
      
        else {
          alert.text("* the name is too short.");
          box.css( "border", "3px double yellow" );
        }
      }
      
    }

    else if (name.length >= 4) {
      for (var i = 0; i < name.length; i++) {
        if(name[i] === " ") {
          alert.text("* no spaces allowed.");
          box.css( "border", "3px double red" );
          return;
        }
      
        else {
          alert.empty();
          box.css( "border", "3px double green" );
        }
      }
    }

  }

  /////////////checking sign in ///
  // disabling sign up button if 
  function updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC) {
    // var isMatchPasswordValid = matchPassword();
    // var isLengthPasswordValid = lengthPassword();
    // var isValidateEmailValid = validateEmail();

    // console.log('matchPassword return:', isMatchPasswordValid);
    // console.log('lengthPassword return:', isLengthPasswordValid);
    // console.log('validateEmail return:', isValidateEmailValid);

    if (firstName === "" || lastName === "" || fatherName === "" || cnic === "" || contact === "" || email === "" || password === "" || confirmPassword === "" || !matchPassword() || !lengthPassword() || !validateEmail() || !validateContact() || !validateCNIC() ) {
      $("#sign-up").prop('disabled', true);
      $("#sign-up").css("backgroundColor", "red");
      $("#sign-up").css("color", "white");
      $("#sign-up").css("opacity", "0.5");
    } else {
      $("#sign-up").prop('disabled', false);
      $("#sign-up").css("backgroundColor", "green");
      $("#sign-up").css("color", "white");
      console.log("entered else");
      $("#sign-up").css("opacity", "1");
    }
  }
  
  
});