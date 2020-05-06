// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  let takeoff = document.getElementById("takeoff");
  takeoff.addEventListener("click", function (event) {
    let response = confirm("Confirm that the shuttle is ready for takeoff.");
    if (response) {
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerHTML = "Shuttle in flight.";

      let shuttleBackground = document.getElementById("shuttleBackground");
      shuttleBackground.style.backgroundColor = "blue";

      let shuttleHeight = document.getElementById("spaceShuttleHeight");
      shuttleHeight.innerHTML = "10000";
    }
  });
// Part 3
  let landing = document.getElementById("landing");
  landing.addEventListener("click", function (event) {
    alert("The shuttle is landing. Landing gear engaged.");
    let flightStatus = document.getElementById("flightStatus");
    flightStatus.innerHTML = "The shuttle has landed.";

    let shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = "green";

    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    spaceShuttleHeight.innerHTML = "0";
  });
//Part 4
  let missionAbort = document.getElementById("missionAbort");
  missionAbort.addEventListener("click", function (event) {
    let answer = confirm("Confirm that you want to abort the mission.");
    if (answer) {
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerHTML = "Mission aborted.";

      let shuttleBackground = document.getElementById("shuttleBackground");
      shuttleBackground.style.backgroundColor = "green";

      let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
      spaceShuttleHeight.innerHTML = "0";
    }
  });

  //Part 5

  let upButton = document.getElementById("up");
  let rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  rocket.style.marginLeft = "0px";
  rocket.style.marginTop = "0px";
  let top = rocket.style.marginTop;
// let left = rocket.style.marginLeft;



 upButton.addEventListener("click", function(event() {
  //  shuttleHeight += 10000;
   let altitude = Number(top.slice(0, top.indexOf('px')));
   rocket.style.marginTop = String(altitude - 10) + 'px`;
   shuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML)+10000);
 });






}

window.onload = init;
