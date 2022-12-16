function searchbtn(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${cityInput.value}`;
}
let form1 = document.querySelector("#city-form");
form1.addEventListener("submit", searchbtn);

let cityTime = document.querySelector("#time");
let currentTime = new Date();

cityTime.innerHTML = currentDate(currentTime);
function currentDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}

function changeTemp1() {
  let link2 = document.querySelector("#fakeTemp");
  let celsius = 20;
  link2.innerHTML = (celsius * 9) / 5 + 32;
}
changeTemp1(20);
let link1 = document.querySelector("#fahrenheit-degree");
link1.addEventListener("click", changeTemp1);

function changeTemp2(event) {
  event.preventDefault();
  let link2 = document.querySelector("#fakeTemp");
  link2.innerHTML = "20";
}
let link2 = document.querySelector("#celsius-degree");
link2.addEventListener("click", changeTemp2);
