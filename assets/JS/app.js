
$(document).ready(function(){
$("#hParI_O").click(function() {
  $("span").hide(200);
  $("#hParI_I").show(200);
})

$("#hParI_I").click(function() {
  $("span").show(200);
  $("#hParI_I").hide(200);
})
})

/*==================================================================
VALIDATION
==================================================================*/
function formVal() {
  var user = document.getElementById(user);
  var iUsername = document.getElementById(iUsername);
  var iFullName = document.getElementById(iFullName);
  var iEmail = document.getElementById(iEmail);
  var basicUrl = document.getElementById(basicUrl);
  var iAddress = document.getElementById(iAddress);
  var iState = document.getElementById(iState);
  var iCity = document.getElementById(iCity);
  var iZip = document.getElementById(iZip);
}

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
