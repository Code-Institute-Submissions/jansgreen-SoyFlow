
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
    }
  });
});

/*==============================================================
READ MORE
===============================================================*/
$(document).ready(function() {
  $("#hParI_I").click(function() {
    $("#secClaInf").show(1500);
    $("#hParI_I").hide(1500);
  });

  $("#hParI_O").click(function() {
    $("#secClaInf").hide();
    $("#hParI_I").show(1500);
  });
});
/*==============================================================
FORMS AND LOG 
===============================================================*/

/*SignIN*/
var sUser = sUser;
console.log(sUser);

function singSendding() {
  var fso = CreateObject("Scripting.FileSystemObject");
  var fh = fso.CreateTextFile("assets/users/Reg.txt", true);
  fh.WriteLine(miCadenaDeTexto);
  fh.Close();
}



/*===================================
PRUEBA
=====================================*/

var APIKAY = 'AIzaSyBs-BPSMqxLUwSi9UJ27ltcNMRTxMEMOyg';
var CLIENT_ID = '522228945921-6q3pk6hsaajtphi8pj466k4sgchds5c9.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
var LoginBut = document.getElementsById('LoginBut');
var LogOutBut = document.getElementsById('LogOutBut');
var UserNameBar = document.getElementsById('UserNameBar');


  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(APIKAY);
    gapi.load('client:auth2', initClient);
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function initClient() {
    gapi.client
      .init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
      .then(() => {
        // Listen for sign in state changes
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle initial sign in state
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        LoginBut.onclick = handleAuthClick;
        LogOutBut.onclick = handleSignoutClick;
        UserNameBar.innerHTML = gapi.currentUser.listen(listener);
      });
  }

  $( document ).ready(function() {
    $( "#LoginBut" ).click(function() {
        $('#LogOutBut').show(); 
        $('#LoginBut').hide(); 
    });

    $( "#LogOutBut" ).click(function() {
        $('#LoginBut').show(); 
        $('#LogOutBut').hide(); 
    });
});

  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: CLIENT_ID});
  });


