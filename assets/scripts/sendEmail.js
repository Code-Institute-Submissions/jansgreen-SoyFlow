
/*==============================================================
LOGIN AND SINGIN
===============================================================*/
<script src="https://cdn.auth0.com/js/lock/11.22/lock.min.js"></script>
 window.addEventListener('load', function() {

  var config = JSON.parse(
    decodeURIComponent(escape(window.atob('@@config@@')))
  );

  var params = Object.assign({
    /* additional configuration needed for use of custom domains
    overrides: {
      __tenant: config.auth0Tenant,
      __token_issuer: 'YOUR_CUSTOM_DOMAIN'
    }, */
    domain: config.auth0Domain,
    clientID: config.clientID,
    redirectUri: config.callbackURL,
    responseType: 'code'
  }, config.internalOptions);

  var webAuth = new auth0.WebAuth(params);

  var databaseConnection = 'Username-Password-Authentication';

  function login(e) {
    e.preventDefault();
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    webAuth.login({
      realm: databaseConnection,
      username: username,
      password: password
    }, function(err) {
      if (err) displayError(err);
    });
  }

  function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    webAuth.redirect.signupAndLogin({
      connection: databaseConnection,
      email: email,
      password: password
    }, function(err) {
      if (err) displayError(err);
    });
  }

  function loginWithGoogle() {
    webAuth.authorize({
      connection: 'google-oauth2'
    }, function(err) {
      if (err) displayError(err);
    });
  }

  function displayError(err) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = err.description;
    errorMessage.style.display = 'block';
  }

  document.getElementById('btn-login').addEventListener('click', login);
  document.getElementById('btn-google').addEventListener('click', loginWithGoogle);
  document.getElementById('btn-signup').addEventListener('click', signup);
});


/*==============================================================
CONTRACT FIELDS
===============================================================*/
$(document).ready(function(){
  $("#conditions").click(function(){
    var UsersName = $("#UserName").val();
    var fullName = $("#full_name").val();
    var Address = $("#Address").val();
    var EvenAddress = $("#E_Address").val();
    var usersEmail = $("#Email").val();
    var Peaplo = $("#Peoble").val();
    var Numberphone = $("#phone").val();
    var Note = $("#note").val();
    var ArtsSelect = $("#ArtSelect").val();

    if (UsersName == "") {
      $("#artfieldUserName").fadeIn();
      $("#artfieldUserName").html("Your Companny Name is empy!!");
      return false;
    } else if (fullName == "") {
      $("#artfieldFullName").fadeIn();
      $("#artfieldFullName").html("Your Full Name is empy!!");
      return false;
    } else if (Address == "") {
      $("#artfieldAddress").fadeIn();
      $("#artfieldAddress").html("Your address is empy!!");
      return false;
    } else if (EvenAddress == "") {
      $("#artfieldEvenAddress").fadeIn();
      $("#artfieldEvenAddress").html("The Event address is empy!!");
      return false;
    } else if (usersEmail == "") {
      $("#userEmail").fadeIn();
      $("#userEmail").html("Your Email is empy!!");
      return false;
    }  else if (Peaplo == "") {
      $("#Peaplo").fadeIn();
      $("#Peaplo").html("how many people go to the event?");
      return false;
    }  else if (Numberphone == "") {
      $("#Nphone").fadeIn();
      $("#Nphone").html("your number phone is empty!!");
      return false;
    } else if (Note == "") {
      $("#ContNote").fadeIn();
      $("#ContNote").html("your number phone is empty!!");
      return false;
    }  else if (ArtsSelect == "") {
      $("#Artselect").fadeIn();
      $("#Artselect").html("your need select the Artist!!");
      return false;
    } else {
      $("#ContSendding").fadeIn();
      $("#allfields").fadeIn();
      $("#Artselect").hide();
      $("#ContNote").hide();
      $("#Nphone").hide();
      $("#Peaplo").hide();
      $("#userEmail").hide();
      $("#artfieldEvenAddress").hide();
      $("#artfieldAddress").hide();
      $("#artfieldFullName").hide();
      $("#artfieldUserName").hide();
      $("#allfields").html("Look great!!!");
      return false;
    }
   
  });
});


/*==============================================================
EMAILING
===============================================================*/
var myform = $("form#ContractEmail");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "soyflow";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("please confirm that you want to send the form");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    }).then(function() {
      window.location.href = "https://jansgreen.github.io/SoyFlow/artist.html";
    });
  return false;
});






