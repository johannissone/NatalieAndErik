const weddingDate = new Date("May 30, 2026 15:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  // If countdown is finished
  if (distance < 0) {
    const timer = document.getElementById("timer");
    if (timer) timer.innerHTML = "<h3>Today is the day! ❤️</h3>";

    const introDays = document.getElementById("days-to-wedding");
    if (introDays) introDays.innerText = "0";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const elDays = document.getElementById("days");
  const elHours = document.getElementById("hours");
  const elMinutes = document.getElementById("minutes");
  const elSeconds = document.getElementById("seconds");

  if (elDays) elDays.innerText = days;
  if (elHours) elHours.innerText = hours;
  if (elMinutes) elMinutes.innerText = minutes;
  if (elSeconds) elSeconds.innerText = seconds;

  const introDays = document.getElementById("days-to-wedding");
  if (introDays) introDays.innerText = days;
}

setInterval(updateCountdown, 1000);
updateCountdown();