
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
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');
const defaultChannel = 'https://www.youtube.com/watch?v=QFs3PIZb3js&list=PLcUqPeI0P9OzpYK1UBbeAApBHkEXONi5K';

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
        LoginButt.onclick = handleAuthClick;
        LogOutBut.onclick = handleSignoutClick;
      }).then(()=>{
        $(document).ready(function() {
          $(LoginButt.onclick).done(setTimeout( function() { window.location.href = "daskboard.html"; }, 500 ));
          $(LogOutBut.onclick).done(setTimeout( function() { window.location.href = "index.html"; }, 500 ));
        })
      });
  }
  $( document ).ready(function() {
    $( "#LoginBut" ).click(function() {
        $('#LogOutBut').show(); 
        $('#LoginBut').hide(); 
        $('#content').show();
    });

    $( "#LogOutBut" ).click(function() {
        $('#LoginBut').show(); 
        $('#LogOutBut').hide(); 
        $('#content').hide();
      });
});

  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: CLIENT_ID});
  });

  function handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
  }
  
  // Handle logout
  function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }
  
  // Display channel data
  function showChannelData(data) {
    const channelData = document.getElementById('channel-data');
    channelData.innerHTML = data;
  }
  
  // Get channel from API
  function getChannel(channel) {
    gapi.client.youtube.channels
      .list({
        part: 'snippet,contentDetails,statistics',
        forUsername: channel
      })
      .then(response => {
        console.log(response);
        const channel = response.result.items[0];
  
        const output = `
          <ul class="collection">
            <li class="collection-item">Title: ${channel.snippet.title}</li>
            <li class="collection-item">Subscribers: ${numberWithCommas(
              channel.statistics.subscriberCount
            )}</li>
            <li class="collection-item">Views: ${numberWithCommas(
              channel.statistics.viewCount
            )}</li>
            <li class="collection-item">Videos: ${numberWithCommas(
              channel.statistics.videoCount
            )}</li>
          </ul>
          <p>${channel.snippet.description}</p>
          <hr>
          <a class="btn grey darken-2" target="_blank" href="https://youtube.com/${
            channel.snippet.customUrl
          }">Visit Channel</a>
        `;
        showChannelData(output);
  
        const playlistId = channel.contentDetails.relatedPlaylists.uploads;
        requestVideoPlaylist(playlistId);
      })
      .catch(err => alert('No Channel By That Name'));
  }
  
  // Add commas to number
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  function requestVideoPlaylist(playlistId) {
    const requestOptions = {
      playlistId: playlistId,
      part: 'snippet',
      maxResults: 10
    };
  
    const request = gapi.client.youtube.playlistItems.list(requestOptions);
  
    request.execute(response => {
      console.log(response);
      const playListItems = response.result.items;
      if (playListItems) {
        let output = '<br><h4 class="center-align">Latest Videos</h4>';
  
        // Loop through videos and append output
        playListItems.forEach(item => {
          const videoId = item.snippet.resourceId.videoId;
  
          output += `
            <div class="col-6">
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          `;
        });
  
        // Output videos
        videoContainer.innerHTML = output;
      } else {
        videoContainer.innerHTML = 'No Uploaded Videos';
      }
    });
  }


