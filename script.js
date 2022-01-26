const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const newYears = [
  "1 Feb 2022",
  "22 Jan 2023",
  "10 Feb 2024",
  "29 Jan 2025",
  "17 Feb 2026",
  "6 Feb 2027",
  "26 Jan 2028",
  "13 Feb 2029",
  "3 Feb 2030",
  "23 Jan 2031",
  "11 Feb 2032",
  "31 Jan 2033",
];

index = 0;

function countdown() {
  newYearsDate = null;
  currentDate = null;
  while (true) {
    newYearsDate = new Date(newYears[index]);
    currentDate = new Date();
    // console.log(currentDate);
    // console.log(newYearsDate);
    if (currentDate.getDate() > newYearsDate.getDate()) {
      index += 1;
    } else if (currentDate.getDate() == newYearsDate.getDate()) {
      newYearsDate = currentDate;
      break;
    } else {
      break;
    }
  }

  seconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  seconds = seconds - days * 3600 * 24;
  const hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - minutes * 60);

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minsElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  if (time < 0) return 0;
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
