function updateCities() {
//Canada
let canadaCity =document.querySelector("#canada");

if (canadaCity) {
  let canadaDate = document.querySelector(".canada-date");
  let canadaTime = document.querySelector(".canada-time");

 canadaDate.innerHTML=  moment()
    .tz("Canada/Central")
    .format("MMMM Do YYYY");

canadaTime.innerHTML= moment()
    .tz("Canada/Central")
    .format("hh:mm:ss [<small>]A[</small>]");
}

  //London
  let londonCity =document.querySelector("#london");
   let londonDate = document.querySelector(".london-date");
   let londonTime = document.querySelector(".london-time");
  if(londonCity) {
  
 londonDate.innerHTML =  moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");

  londonTime.innerHTML = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
}
}

function onChange(event) {
  let city = document.querySelector(".cities");
  let timezone = event.target.value;
if(timezone === "current-location"){
  timezone = moment.tz.guess();
}
  let cityName= timezone.replace("_", " ").split("/")[1];
  city.innerHTML = `
 <div class="city">
<div class="left">
    <h2>${cityName}</h2>

<div class="date">${moment().tz(timezone).format("MMMM Do YYYY")}
   </div>
<a href="/">All cities</a>
</div>
<div class="right">
    
<div class="time"> 
${moment().tz(timezone).format("hh:mm:ss [<small>]A[</small>]")}
</div>


 
 `;

}

updateCities();
setInterval(updateCities, 1000)
 
 let searchInput = document.querySelector("#search-input");

 searchInput.addEventListener("change", onChange);


 