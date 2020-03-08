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
API OF 
===============================================================*/
 /* 
    function authenticate() {
      return gapi.auth2.getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit"})
          .then(function() { console.log("Sign-in successful"); },
                function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
      gapi.client.setApiKey("AIzaSyBs-BPSMqxLUwSi9UJ27ltcNMRTxMEMOyg");
      return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
          .then(function() { console.log("GAPI client loaded for API"); },
                function(err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
      return gapi.client.youtube.channels.list({})
          .then(function(response) {
                  // Handle the results here (response.result has the parsed body).
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
    }
    gapi.load("client:auth2", function() {
      gapi.auth2.init({client_id: "522228945921-6q3pk6hsaajtphi8pj466k4sgchds5c9.apps.googleusercontent.com"});
    });*/
  
  

/*========================
prueba
================*//*

var OAUTH2_CLIENT_ID = '522228945921-6q3pk6hsaajtphi8pj466k4sgchds5c9.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}

/*

var HTMLRestSend = document.querySelector("data");
function writeToDocument() {
  fetch(
    "https://apis.google.com/js/api.js"
  )
    .then(res => res.json())
    .then(data => {
      var acceAlbum =
        data.album[`name`] +
        "     " +
        data.album[`artist`] +
        "     " +
        data.album[`image`][`0`].size +
        "    " +
        data.album[`url`] +
        "     " +
        data.album[`listeners`] +
        "     " +
        data.album[`playcount`] +
        "     " +
        data.album[`tracks`].track +
        "     " +
        data.album[`tags`].tag;

      var x = document.createElement("TABLE");
      x.setAttribute("id", "myTable");
      document.body.appendChild(x);

      var y = document.createElement("TR");
      y.setAttribute("id", "myTr");
      document.getElementById("myTable").appendChild(y);

      var z = document.createElement("TD");
      var name = document.createTextNode(`${acceAlbum}`);
      console.log(data.album);

      z.appendChild(name);
      document.getElementById("data").appendChild(z);
    });
} 
*/
/*===========================*/ /*CLABE API*/
/*https://www.youtube.com/watch?v=SPIbNWqyulk
AIzaSyB3zD_WxamQjZdhXJ08fxVpfdkukZlyLCE*/
/*===========================*/

/*

const baseURL = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=9c69e58809d74e2d7b97cb3684ffdbf2&artist=all&album=all&format=json";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(type, function(data) {
        data = data.results;
        console.log(data[`album`].name);
        
        
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];
            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`)
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}*/

/*

  var artist = document.createTextNode(`${acceAlbum[`artist`]}`);
  var url = document.createTextNode(`${acceAlbum[`url`]}`);
  var listeners = document.createTextNode(`${acceAlbum[`listeners`]}`);
  var playcount = document.createTextNode(`${acceAlbum[`playcount`]}`);
  var trackst = document.createTextNode(`${acceAlbum[`tracks`]}`);
  var tags = document.createTextNode(`${acceAlbum[`tags`]}`);
  var fullInfo = `${name + artist + url + listeners + playcount + trackst + tags + fullInfo}`;

===============================================================*/
