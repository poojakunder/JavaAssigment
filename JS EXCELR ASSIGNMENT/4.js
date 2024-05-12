let sessionLength = 25 * 60; // Initial session length in seconds
let breakLength = 5 * 60; // Initial break length in seconds
let timer;
let isSession = true;
let isRunning = false;

function updateSessionTime() {
  const sessionTime = document.getElementById("session-time");
  const minutes = Math.floor(sessionLength / 60);
  const seconds = sessionLength % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  sessionTime.textContent = formattedTime;
}

function updateButtons() {
  const startButton = document.getElementById("start-button");
  startButton.textContent = isRunning ? "STOP" : "START";
}

function startStopTimer() {
  if (isRunning) {
    clearInterval(timer);
  } else {
    timer = setInterval(updateTimer, 1000);
  }
  isRunning = !isRunning;
  updateButtons();
}

function updateTimer() {
    if (sessionLength === 0) {
      clearInterval(timer);
      if (isSession) {
        isSession = false;
        sessionLength = breakLength; // Set session length to break length
      } else {
        isSession = true;
        sessionLength = 25 * 60; // Reset session length to default
      }
      updateSessionTime();
      startStopTimer(); // Automatically start the next session or break
    } else {
      sessionLength--;
      updateSessionTime();
    }
  }
  

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  sessionLength = 25 * 60; // Reset session length to default
  breakLength = 5 * 60; // Reset break length to default
  isSession = true;
  updateSessionTime();
  updateButtons();
}

function incrementSessionLength() {
  if (!isRunning) {
    sessionLength += 60;
    document.getElementById("session-length").textContent = Math.floor(sessionLength / 60);
    updateSessionTime();
  }
}

function decrementSessionLength() {
  if (!isRunning && sessionLength > 60) {
    sessionLength -= 60;
    document.getElementById("session-length").textContent = Math.floor(sessionLength / 60);
    updateSessionTime();
  }
}

function incrementBreakLength() {
  if (!isRunning) {
    breakLength += 60;
    document.getElementById("break-length").textContent = Math.floor(breakLength / 60);
  }
}

function decrementBreakLength() {
  if (!isRunning && breakLength > 60) {
    breakLength -= 60;
    document.getElementById("break-length").textContent = Math.floor(breakLength / 60);
  }
}

// Call updateSessionTime initially
updateSessionTime();
updateButtons();
