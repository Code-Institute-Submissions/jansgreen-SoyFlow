
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
    } else if(password == "") {
      $("#alrUser").html("Password is empy!!!");
      $("#alrUser").show();
        return false;
    }else{
      $("#alrUser").html("It look great!");
      $("#alrUser").fadeOut(1500);
    }
  });
});


/*==============================================================
VALIDATE SINGING
===============================================================*/
$(document).ready(function() {
  $("#singSendding").click(function() {
    var iUsername = $("#iUsername");
    var iFullName = $("#iFullName");
    var iEmail = $("#iEmail");
    var basicUrl = $("#basicUrl");
    var iAddress = $("#iAddress");
    var iState = $("#iState");
    var iCity = $("#iCity");
    var iZip = $("#iZip");

    if (iUsername == "") {
      $("#alrReg").html("User is empy!!!");
      $("#alrReg").show();
      return false;
    } else if(iFullName == "") {
      $("#alrReg").html("Full Name is empy!!!");
      $("#alrReg").show();
        return false;
    }else if(iEmail == "") {
      $("#alrReg").html("Email is empy!!!");
      $("#alrReg").show();
        return false;
    }else if(iAddress == "") {
      $("#alrReg").html("Address is empy!!!");
      $("#alrReg").show();
        return false;
    }else if(iState == "") {
      $("#alrReg").html("States is empy!!!");
      $("#alrReg").show();
        return false;
    }else if(iCity == "") {
      $("#alrReg").html("City is empy!!!");
      $("#alrReg").show();
        return false;
    }else if(iZip == "") {
      $("#alrReg").html("Zip Code is empy!!!");
      $("#alrReg").show();
        return false;
    }else{
      $("#alrReg").html("It look great!");
      $("#alrReg").fadeOut(1500);
    }
  });
});

/*==============================================================
VALIDATE CONTRACT ART
===============================================================*/
$(document).ready(function() {
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
    } else if(full_name == "") {
      $("#alrContrFname").html("Full Name is empy!!!");
      $("#alrContrFname").show();
        return false;
    }else if(Address == "") {
      $("#alrContrAddress").html("Email is empy!!!");
      $("#alrContrAddress").show();
        return false;
    }else if(E_Address == "") {
      $("#alrContrEaddress").html("Address is empy!!!");
      $("#alrContrEaddress").show();
        return false;
    }else if(Email == "") {
      $("#alrContrEmail").html("Email is empy!!!");
      $("#alrContrEmail").show();
        return false;
    }else if(Password == "") {
      $("#alrContrPassword").html("Password is empy!!!");
      $("#alrContrPassword").show();
        return false;
    }else if(phone == "") {
      $("#alrContrPhone").html("Phone is empy!!!");
      $("#alrContrPhone").show();
        return false;
    }else{
      $("#alrContr").html("It look great!");
      $("#alrContr").fadeOut(1500);
    }
  });
});


/*==============================================================
READ MORE
===============================================================*/
$(document).ready(function() {
     $("#hParI_I").click(function(){
      $("#secClaInf").show(1500);
      $("#hParI_I").hide(1500);
    });
    
    $("#hParI_O").click(function(){
      $("#secClaInf").hide();
      $("#hParI_I").show(1500);
    });
  });