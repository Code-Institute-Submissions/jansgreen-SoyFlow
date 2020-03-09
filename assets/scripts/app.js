
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

/*==============================================================
API OF YOUTUBE
===============================================================*/

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope:
        "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit https://www.googleapis.com/youtube/v3/channels"
    })
    .then(
      function() {
        console.log("Sign-in successful");
      },
      function(err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyBs-BPSMqxLUwSi9UJ27ltcNMRTxMEMOyg");
  return gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
      },
      function(err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.channels.list({}).then(
    function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) {
      console.error("Execute error", err);
    }
  );
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({
    client_id:
      "522228945921-6q3pk6hsaajtphi8pj466k4sgchds5c9.apps.googleusercontent.com"
  });
});

/*========================
prueba
================*/
$(document).ready(function() {
  $.get(
    "www.googleapis.com/youtube/v3/channels", {
      part: 'contentDetails',
      id: 'Wj_WdivxjMg',
      key: 'AIzaSyBs-BPSMqxLUwSi9UJ27ltcNMRTxMEMOyg' },
    function(data) {
      $.each(data.items, function(i, item) {
        console.log(item);
      });
    }
  );
});


/*======================= AJAX



var daskCon = document.querySelector('#data')
function spotifyAuh() {
  fetch('https://accounts.spotify.com/authorize?client_id=8402bf679f8b4e6c975686305c2bc15f&scopes=user-library-read&response_type=code&&redirect_uri=https%3A%2F%2Fjansgreen.github.io%2FSoyFlow%2Fdaskboard', 37i9dQZEVXbKAbrMR8uuf7)
    .then(res => res.json())
    .then(data => {
      data
      console.log(data)
      daskCon.innerHTML = `${data}`;
    })
}

xhr.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function (data) {
    console.log('Albums information', data);
  }, function (err) {
    console.error(err);
  });





=================================*/

/*CLABE API*/

/*=====================
SPOTIFY AUTORIZACE AND TOKEN
=======================
Client_Id 8402bf679f8b4e6c975686305c2bc15f
Client  f9408c256dd64b00ac65e8b4bdad7549
ClientID_Secret_Together 8402bf679f8b4e6c975686305c2bc15f:f9408c256dd64b00ac65e8b4bdad7549
ClientID_Secret_BASE64_ENCODE ODQwMmJmNjc5ZjhiNGU2Yzk3NTY4NjMwNWMyYmMxNWY6Zjk0MDhjMjU2ZGQ2NGIwMGFjNjVlOGI0YmRhZDc1NDk=



curl -H "Authorization: Basic ODQwMmJmNjc5ZjhiNGU2Yzk3NTY4NjMwNWMyYmMxNWY6Zjk0MDhjMjU2ZGQ2NGIwMGFjNjVlOGI0YmRhZDc1NDk=" -d grant_type=authorization_code -d code=AQB84jEMV1ODCPe7y643Kb7OG5hYt_N1gxoZh0ZXD5Ceo0xnWXMPn8oVilRYHSdzTBbrQUddTO1UOrM1_Bl0UKClXyNtKDnHyEXM4uIhG-NUGkwXXLaKK_q_UC9Nfn2xfWRU8b5sn667bb8ETKSKAAggsS1duySsw5CiUwdUjoey8aGO0jvq14zKI6o1JsZ50a6zppSVSzDa4kyk-dbJs80YpA -d redirect_uri=https%3A%2F%2Fjansgreen.github.io%2FSoyFlow%2Fdaskboard https://accounts.spotify.com/api/token

{"access_token":"BQAX4QnLuSdR9D1WVtKSrYBcbixBmNY5lB4619AXCkmiH5YHa1iCAFTOJjFcRgAPxtyINsVQsZLbt5DaQYrzYKOJwwfnA1bDH46Cn8RVBjOkM6HYzbZfSUAOB3C6B3DWJWoldhnFkhmbmsVvTrscC56aNvqXiEuD6w","token_type":"Bearer","expires_in":3600,"refresh_token":"AQChtWqIAZEHYxciiOJ-oNPXha0SAtk2wImFN3bRikBl12ZyUmDJfDI4F5UGrtif2vivuZIdOAotHWpfdgmNshWoiZNMhu3BQ_ZvJoAK4bPQkZLcN-foNhoWikgJDEdSDNI","scope":""}

====================== SPOTIFY URL
https://accounts.spotify.com/authorize?client_id=8402bf679f8b4e6c975686305c2bc15f&scopes=user-library-read&response_type=code&&redirect_uri=https%3A%2F%2Fjansgreen.github.io%2FSoyFlow%2Fdaskboard
=======================*/

/*
var request = require("request");
var user_id = "lyo60r7xrt5cexv4nm7uw4wd2";
var token = "Bearer BQAX4QnLuSdR9D1WVtKSrYBcbixBmNY5lB4619AXCkmiH5YHa1iCAFTOJjFcRgAPxtyINsVQsZLbt5DaQYrzYKOJwwfnA1bDH46Cn8RVBjOkM6HYzbZfSUAOB3C6B3DWJWoldhnFkhmbmsVvTrscC56aNvqXiEuD6w";
var playlist_url="https://api.spotify.com/v1/playlists/"+user_id+"/playlists";

  function fPlayList() {
      fetch({url:playlist_url, headers:{Authorization:token}})
      .then(res => res.json())
      .then(data => {
          console.log(data)

      })
  }*/

/*================================= VAR REQUEST = REQUIRE("NO ESTA FUNCIONANDO")
var request = require("request");
var user_id = "lyo60r7xrt5cexv4nm7uw4wd2";
var token = "Bearer BQAX4QnLuSdR9D1WVtKSrYBcbixBmNY5lB4619AXCkmiH5YHa1iCAFTOJjFcRgAPxtyINsVQsZLbt5DaQYrzYKOJwwfnA1bDH46Cn8RVBjOkM6HYzbZfSUAOB3C6B3DWJWoldhnFkhmbmsVvTrscC56aNvqXiEuD6w";
var playlist_url="https://api.spotify.com/v1/playlists/"+user_id+"/playlists";

request({url:playlist_url, headers:{Authorization:token}}, function(err, res) {
  if(res){
    var playlists=Json.parse(res.body);
    var playlist_url = playlists.items[0].href
    request({url:playlist_url, headers:{"Authorization":token}}, function(err, res) {
    if (res){
      var playlist = JSON.parse(res.body);
      console.log("playlist:"+playlist.name);
      playlist.tracks.items.forEach(function(track) {
        document.getElementsById("data").innerHTML = `"playlist:"+${playlist.name}`
        console.log(track.track.name);

      });
     }
  })
}
})


*/

/*
  var contenido = document.querySelector('#contenido')
  function spotifyButton() {
      fetch('https://accounts.spotify.com/authorize?client_id=8402bf679f8b4e6c975686305c2bc15f&redirect_uri=https%3A%2F%2Fjansgreen.github.io%2FSoyFlow%2Fdaskboard&response_type=code')
      .then(res => res.json())
      .then(data => { data.setTimeout(600)
          console.log(data)

      })
  }




/*

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
/*===========================*/
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


===============================
  .getJSON('your-api-url/validate.php?'+$(this).serialize+'callback=?', function(data){
  if(data)console.log(data);
  });

   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });

  // get Elvis' albums, using Promises through Promise, Q or when
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
    .then(function(data) {
      console.log('Artist albums', data);
    }, function(err) {
      console.error(err);
    });

    var spotifyApi = new SpotifyWebApi('https://api.spotify.com/v1/playlists/');
spotifyApi.setAccessToken('BQAX4QnLuSdR9D1WVtKSrYBcbixBmNY5lB4619AXCkmiH5YHa1iCAFTOJjFcRgAPxtyINsVQsZLbt5DaQYrzYKOJwwfnA1bDH46Cn8RVBjOkM6HYzbZfSUAOB3C6B3DWJWoldhnFkhmbmsVvTrscC56aNvqXiEuD6w');
spotifyApi.setPromiseImplementation(Q);
spotifyApi.getAuthInstance('8402bf679f8b4e6c975686305c2bc15f');
spotifyApi.setApiKey('8402bf679f8b4e6c975686305c2bc15f')

spotifyApi.getArtistAlbums('17HsiXfqKUPoTP6Y5ebs1L:playlist:37i9dQZEVXbKAbrMR8uuf7')
    .then(function(data) {
    console.log('Artist albums', data);
 }, function(err) {
    console.error(err);
  });

===============================================================*/

document.querySelector("#playlist");
