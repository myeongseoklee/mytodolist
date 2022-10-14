const API_KEY = 'ce1fd714812274a14867dbf104c358ec'

function onGeoOk (position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather div:first-child");
      const weather = document.querySelector("#weather div:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
    });
}


function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);