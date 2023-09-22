$(document).ready(function(){
    var box = ""; 
    var alert = ""; 
    
    var password = $("#password").val(); 
    var email = ""; // $("#emailAddr").val(); 
   updatesignInButton(email, password, lengthPassword, validateEmail )
    

  
    $("#emailAddr").on("input", function(){
      mail = $(this).val();
      validateEmail(mail);
      updatesignInButton(email, password, lengthPassword, validateEmail )
    })
    
    $("#password").on("input", function(){
      password = $(this).val();
      box  = $(this);
      alert = box.next();
      lengthPassword (password, box, alert);
      updatesignInButton(email, password, lengthPassword, validateEmail )
    })

  
    $("#sign-in").click(function() {
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
  

    /////////////checking sign in ///
    // disabling sign up button if 
    function updatesignInButton(email, password, lengthPassword, validateEmail ) {
      // var isMatchPasswordValid = matchPassword();
      // var isLengthPasswordValid = lengthPassword();
      // var isValidateEmailValid = validateEmail();
  
      // console.log('matchPassword return:', isMatchPasswordValid);
      // console.log('lengthPassword return:', isLengthPasswordValid);
      // console.log('validateEmail return:', isValidateEmailValid);
  
      if (email === "" || password === "" || !lengthPassword() || !validateEmail() ) {
        $("#sign-in").prop('disabled', true);
        $("#sign-in").css("backgroundColor", "red");
        $("#sign-in").css("color", "white");
        $("#sign-in").css("opacity", "0.5");
      } else {
        $("#sign-in").prop('disabled', false);
        $("#sign-in").css("backgroundColor", "green");
        $("#sign-in").css("color", "white");
        console.log("entered else");
        $("#sign-in").css("opacity", "1");
      }
    }
    
    
  });