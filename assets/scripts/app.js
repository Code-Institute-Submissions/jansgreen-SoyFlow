/*==============================================================
VALIDATE LOGGIN
===============================================================*/
$(document).ready(function () {
  $("#logSending").click(function () {
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
$(document).ready(function () {
  $("#singSendding").click(function () {
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
$(document).ready(function () {
  $("#ContSendding").click(function () {
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
      $(document).ready(function () {
        setTimeout(function () {
          window.location.href = "daskboard.html";
        }, 500);
      });
    }
  });
});

/*==============================================================
READ MORE
===============================================================*/
$(document).ready(function () {
  $("#hParI_I").click(function () {
    $("#secClaInf").show(1500);
    $("#hParI_I").hide(1500);
  });

  $("#hParI_O").click(function () {
    $("#secClaInf").hide();
    $("#hParI_I").show(1500);
  });
});
/*==============================================================
FORMS AND LOG 
===============================================================*/
var Check = "#gridCheck";
function lO() {
  if (Check) {
    $(document).ready(function () {
      setTimeout(function () {
        window.location.href = "daskboard.html";
      }, 500);
    });
  } else {
    console.log("Hay un error");
  }
}

/*===================================
YOUTUBE API
=====================================*/

var APIKAY = "AIzaSyBs-BPSMqxLUwSi9UJ27ltcNMRTxMEMOyg";
var CLIENT_ID =
  "522228945921-6q3pk6hsaajtphi8pj466k4sgchds5c9.apps.googleusercontent.com";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
];
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

const authorizeButton = document.getElementById("LoginBut");
const signoutButton = document.getElementById("LogOutBut");
const LoginButMain = document.getElementById("LoginButMain");
const content = document.getElementById("content");
const channelForm = document.getElementById("channel-form");
const channelInput = document.getElementById("channel-input");
const videoContainer = document.getElementById("video-container");

const defaultChannel = "jansgreen";

// Form submit and change channel
channelForm.addEventListener("submit", e => {
  e.preventDefault();

  const channel = channelInput.value;

  getChannel(channel);
});
function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope:
        "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner"
    })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("APIKAY");
  return gapi.client
    .load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Load auth2 library
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

// Init API client library and set up sign in listeners
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
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
      LoginButMain.onclick = handleAuthClickI;
    });
}

// Update UI sign in state changes
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    content.style.display = "block";
    videoContainer.style.display = "block";
    getChannel(defaultChannel);
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
    content.style.display = "none";
    videoContainer.style.display = "none";

  }
}

const WinLoc =  window.location.value = "index.html";
const logOut =  signoutButton.onclick;
const LoginButMain = LoginButMain.onclick;
const login = authorizeButton.onclick;

function jumPage(updateSigninStatus) {
  if(updateSigninStatus && logOut){
    setTimeout(function () {
      window.location.href = "index.html";
    }, 500);
   
  }  
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}
function handleAuthClickI() {
  gapi.auth2.getAuthInstance().signIn();
  setTimeout(function () {
    window.location.href = "daskboard.html";
  }, 500);
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

// Display channel data
function showChannelData(data) {
  const channelData = document.getElementById("channel-data");
  channelData.innerHTML = data;
}

// Get channel from API
function getChannel(channel) {
  gapi.client.youtube.channels
    .list({
      part: "snippet,contentDetails,statistics",
      forUsername: channel
    })
    .then(response => {
      console.log(response);
      const channel = response.result.items[0];

      const output = `
        <div class="card bg-light mb-3" style="max-width: 5rem;">
        <div class="card-header">${channel.snippet.title}</div>
        <div class="card-body">
        <li">Subscribers: ${numberWithCommas(
        channel.statistics.subscriberCount
      )}</li">
        <li>Views: ${numberWithCommas(channel.statistics.viewCount)}</li>
        <li>Videos: ${numberWithCommas(channel.statistics.videoCount)}</li>
          <h5 class="card-title">${channel.id}</h5>
          <p ${channel.snippet.description}</p>
          <hr>
          <a class="btn btn-info" target="_blank" href="https://youtube.com/${
        channel.snippet.customUrl
        }">Visit Channel</a>
        </div> `;
      showChannelData(output);

      const playlistId = channel.contentDetails.relatedPlaylists.uploads;
      requestVideoPlaylist(playlistId);
    })
    .catch(err => alert("No Channel By That Name"));
}

// Add commas to number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function requestVideoPlaylist(playlistId) {
  const requestOptions = {
    playlistId: playlistId,
    part: "snippet",
    maxResults: 10
  };

  const request = gapi.client.youtube.playlistItems.list(requestOptions);

  request.execute(response => {
    console.log(response);
    const playListItems = response.result.items;
    if (playListItems) {
      let output =
        '<div class="col-12"><br><h4 class="center-align">Latest Videos</h4></div><br>';

      // Loop through videos and append output
      playListItems.forEach(item => {
        const videoId = item.snippet.resourceId.videoId;

        output += `<iframe width="25%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      });

      // Output videos
      videoContainer.innerHTML = output;
    } else {
      videoContainer.innerHTML = "No Uploaded Videos";
    }
  });
}
