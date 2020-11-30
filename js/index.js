//variables for timer functionality
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let hrs_val, mins_val, secs_val;
let btn = document.querySelector("button");
var interID;

//Variables for task list functionality
let taskEnteringArea = document.getElementById('task');
let taskList = document.getElementById('taskList');
let addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.onclick = function(){
  let task = document.createElement('li');
  
  let text = taskEnteringArea.value;
  taskList.appendChild(task);
}

// Timer funcitonality *******************************************************************
function stopTimer() {
  window.clearInterval(interID);
  btn.innerHTML = "START";
  btn.onclick = startTimer;
  alert("Timer stopped");
}

function countdown() {
  if (secs_val == 0) {
    if (mins_val == 0) {
      if (hrs_val == 0) {
        stopTimer();
      } else {
        hrs_val--;
        hrs.value = hrs_val;
      }

      mins_val = 59;
    } else {
      mins_val--;
    }
    mins.value = mins_val;

    secs_val = 59;
  } else {
    secs_val--;
  }
  secs.value = secs_val;
}

function startTimer(evt) {
  secs_val = Number(secs.value);
  mins_val = Number(mins.value);
  hrs_val = Number(hrs.value);
  evt.target.onclick = stopTimer;
  evt.target.innerHTML = "STOP";
  interID = window.setInterval(countdown, 1000);
}

btn.onclick = startTimer;