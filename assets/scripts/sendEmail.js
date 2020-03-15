/*==============================================================
EMAILING
===============================================================*/

  var ContractEmail = $("form#ContractEmail");
  ContractEmail.submit(function(event){
    event.preventDefault();
  
    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "soyflow";
  
    ContractEmail.find("button").text("Sending...");
    emailjs.sendForm(service_id,template_id,ContractEmail[0])
      .then(function(){ 
        $(document).ready(function() {
          $('#ContSendding').ready("slow", function(){window.location.href = "https://jansgreen.github.io/SoyFlow/artist.html";});
              });
     
        alert("Sent!");
        ContractEmail.find("button").text("Send");
      }, function(err) {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         ContractEmail.find("button").text("Send");
      });
    return false;
  });

/*
$('#contractForm').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
  formData.append('service_id', 'gmail');
  formData.append('template_id', 'soyflow');
  formData.append('user_id', 'user_Oqsg60rcrUd7Iqtg8SvvS');
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});
*/
/*
var data = {
  service_id: 'gmail',
  template_id: 'soyflow',
  user_id: 'user_Oqsg60rcrUd7Iqtg8SvvS',
  template_params: {
      'username': 'James',
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
  }
};

function Contract(contactForm) {
var templateParams = {
  contactFormname: 'James',
    notes: 'Check this out!'
  };
  
  emailjs.send('default_service', 'soyflow', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    alert('Your mail is sent!');
  }).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });
}
    var iUsername = $("#iUsername");
    var iFullName = $("#iFullName");
    var iEmail = $("#iEmail");
    var basicUrl = $("#basicUrl");
    var iAddress = $("#iAddress");
    var iState = $("#iState");
    var iCity = $("#iCity");
    var iZip = $("#iZip");

    $(document).ready(function() {
      $("#singSendding").click(function() {
        if (iUsername == "") {
          $("#alrReg").html("User is empy!!!");
          $("#alrReg").show();
          return false;
        } else if (iFullName == "") {
          $("#alrReg").html("Full Name is empy!!!");
          $("#alrReg").show();
          return false;
        } else if (iEmail == "") {
          $("#alrReg").html("Email is empy!!!");
          $("#alrReg").show();
          return false;
        } else if (iAddress == "") {
          $("#alrReg").html("Address is empy!!!");
          $("#alrReg").show();
          return false;
        } else if (iState == "") {
          $("#alrReg").html("States is empy!!!");
          $("#alrReg").show();
          return false;
        } else if (iCity == "") {
          $("#alrReg").html("City is empy!!!");
          $("#alrReg").show();
          return false;
        } else if (iZip == "") {
          $("#alrReg").html("Zip Code is empy!!!");
          $("#alrReg").show();
          return false;
        } else {
          $("#alrReg").html("It look great!");
          $("#alrReg").fadeOut(1500);
           }
        });
    });
/*

    function Contract(contractForm) {
      emailjs.send("efault_service", "soyflow",{
        "User_name": contractForm.name.value,
        "full_name": contractForm.full_name.value,
        "Address": contractForm.Address.value,
        "E_Address": contractForm.E_Address.value,
        "Email": contractForm.Email.value,
        "People": contractForm.Peaplo.value,
        "phone": contractForm.phone.value,
        "note": contractForm.note.value,
        "project_request": contractForm.note.value
      })
      .then(function (response) {
        console.log("Success Send", response);
        
      },
      function (error) {
        console.log("FAILED", error);
        
      })
    }*/
    

    /*==============================================================
VALIDATE LOGGIN
===============================================================*/
/*$(document).ready(function() {
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
});*/


/*==============================================================
VALIDATE CONTRACT ART
===============================================================*/
/*$(document).ready(function() {
  $("#ContSendding").click(function() {
    var User_name = $("#User_name");
    var full_name = $("#full_name");
    var Address = $("#Address");
    var E_Address = $("#E_Address");
    var Email = $("#Email");
    var Password = $("#Password");
    var phone = $("#phone");

    if (User_name == "") {
      $("#alrContrUname").html("User is empy!!!");
      $("#alrContrUname").show();
      return false;
    } else if (full_name == "") {
      $("#alrContrFname").html("Full Name is empy!!!");
      $("#alrContrFname").show();
      return false;
    } else if (Address == "") {
      $("#alrContrAddress").html("Email is empy!!!");
      $("#alrContrAddress").show();
      return false;
    } else if (E_Address == "") {
      $("#alrContrEaddress").html("Address is empy!!!");
      $("#alrContrEaddress").show();
      return false;
    } else if (Email == "") {
      $("#alrContrEmail").html("Email is empy!!!");
      $("#alrContrEmail").show();
      return false;
    } else if (Password == "") {
      $("#alrContrPassword").html("Password is empy!!!");
      $("#alrContrPassword").show();
      return false;
    } else if (phone == "") {
      $("#alrContrPhone").html("Phone is empy!!!");
      $("#alrContrPhone").show();
      return false;
    } else {
      $("#alrContr").html("It look great!");
      $("#alrContr").fadeOut(1500);
      $(document).ready(function() {
        setTimeout(function() {
          window.location.href = "daskboard.html";
        }, 500);
      });
    }
  });
});*/