
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

/*==============================================================
VALIDATE LOGGIN
===============================================================*/
$(document).ready(function() {
  $("#logSending").click(function() {
    var user = $("#userLog").val();
    var password = $("#passwordLog").val();

    if (user == "") {
      $("#alrUser").html("User is empy!!!");
      $("#alrUser").show();
      return false;
    } else if (password == "") {
      $("#alrUser").html("Password is empy!!!");
      $("#alrUser").show();
      return false;
    } else {
      $("#alrUser").html("It look great!");
      $("#alrUser").fadeOut(1500);
    }
  });
});


