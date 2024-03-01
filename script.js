function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 102; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer() {
  var timeinterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(timeinterval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

var hitrn = 0;

function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewhit();
  }
});

makeBubble();
runTimer();
getNewhit();
increaseScore();
