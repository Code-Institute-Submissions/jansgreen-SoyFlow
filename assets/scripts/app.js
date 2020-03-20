/*================================================================================
REGI BUTTON
==================================================================================*/
$(document).ready(function(){
  $("#gridCheck").click(function(){
    var UsersName = $("#iUsername").val();//
    var fullName = $("#iFullName").val();//
    var Address = $("#iAddress").val();//
    var City = $("#iCity").val();//
    var usersEmail = $("#iEmail").val();//
    var password = $("#password").val();//
    var Numberphone = $("#Iphone").val();//
    var State = $("#iState").val();//
    var Zip = $("#iZip").val();//

    if (UsersName == "") {
      $("#labUsername").fadeIn();
      $("#labUsername").html("Your User Name is empy!!");
      return false;
    } else if (fullName == "") {
      $("#labIfullName").fadeIn();
      $("#labIfullName").html("Your Full Name is empy!!");
      return false;
    } else if (Address == "") {
      $("#labIaddress").fadeIn();
      $("#labIaddress").html("Your address is empy!!");
      return false;
    } else if (City == "") {
      $("#labICity").fadeIn();
      $("#labICity").html("The City is empy!!");
      return false;
    } else if (usersEmail == "") {
      $("#labIEmail").fadeIn();
      $("#labIEmail").html("Your Email is empy!!");
      return false;
    }  else if (password == "") {
      $("#labPassword").fadeIn();
      $("#labPassword").html("Your Password");
      return false;
    }  else if (Numberphone == "") {
      $("#labNphone").fadeIn();
      $("#labNphone").html("your number phone is empty!!");
      return false;
    } else if (State == "") {
      $("#labIstate").fadeIn();
      $("#labIstate").html("your labIstate is empty!!");
      return false;
    }  else if (Zip == "") {
      $("#labIzip").fadeIn();
      $("#labIzip").html("your zide code!");
      return false;
    } else {
      $("#btn-signup").fadeIn();
      $("#alrReg").fadeIn();
      $("#labIfullName").hide();
      $("#labIaddress").hide();
      $("#labICity").hide();
      $("#labIEmail").hide();
      $("#labPassword").hide();
      $("#labNphone").hide();
      $("#labIstate").hide();
      $("#labIzip").hide();
      $("#alrReg").html("Look great!!!");
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
REGISTRER
===============================================================*/
function handleSignUp() {
var email = document.getElementById('iEmail').value;
var password = document.getElementById('password').value;
var RegUsername = document.getElementById("iUsername").value; //
var RegiFullName = document.getElementById("iFullName").value; //
var RegbasicUrl = document.getElementById("basicUrl").value;//
var RegNphone = document.getElementById("Nphone").value;
var RegiAddress = document.getElementById("iAddress").value;
var RegiCity = document.getElementById("iCity").value;
var RegiState = document.getElementById("iState").value;
var RegiZip = document.getElementById("iZip").value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  }).then(function() {
    window.location.href = "/daskboard.html";
  });
  // [END createwithemail]
}


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
const LoginButMains = document.getElementById("LoginButMain");
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
      function() {
        console.log("Sign-in successful");
      },
      function(err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("APIKAY");
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
      LoginButMains.onclick = handleAuthClick;
    });
}

function updateSigninStatus(isSignedIn) {

  if(isSignedIn){
    $(document).ready(function () {
        $("#LoginButMain").ready(function() {
          $('#LoginButMain').hide("slow", function(){window.location.href = "https://jansgreen.github.io/SoyFlow/daskboard.html";});
          $("#LoginButMain").hide(1500);
          $("#LoginBut").hide(1500);
          $("#LogOutBut").show(1500);
          $("#content").show(1500);
          getChannel(defaultChannel);
           });
        });
    }else if(isSignedIn){
    $(document).ready(function () {
        $("#LoginBut").ready(function() {
          $("#LoginButMain").hide(1500);
          $("#LoginBut").hide(1500);
          $("#LogOutBut").show(1500);
          $("#content").show(1500);
          getChannel(defaultChannel);
         });
     });
        
      }else{
      $(document).ready(function () {
        $("#LogOutBut").ready(function() {
          $('#LogOutBut').hide("slow", function(){window.location.href = "https://jansgreen.github.io/SoyFlow/index.html";});
          $("#LoginBut").hide(1500);
          $("#LoginButMain").show(1500);
          $("#content").hide(1500);
        });
      });
      }
  }

  

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
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

        output += `<iframe width="25%" height="auto" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> <br>`;
      });

      // Output videos
      videoContainer.innerHTML = output;
    } else {
      videoContainer.innerHTML = "No Uploaded Videos";
    }
  });
}
