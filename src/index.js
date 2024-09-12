function updateCity(cityId, timezone) {
  let cityDate = document.querySelector(`#${cityId} .date`);
  let cityTime = document.querySelector(`#${cityId} .time`);

  cityDate.innerHTML = moment().tz(timezone).format("MMMM Do YYYY");
  cityTime.innerHTML = moment()
    .tz(timezone)
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCities() {
  updateCity("canada", "Canada/Central");
  updateCity("dubai", "Asia/Dubai");
}


updateCities();


setInterval(updateCities, 1000);
