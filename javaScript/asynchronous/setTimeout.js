let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  alert("Hello!");
}


function startTime() {
  const date = new Date();
  document.getElementById("txt").innerHTML = date.toLocaleTimeString();
  setTimeout(function() {startTime()}, 1000);
}