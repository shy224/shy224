const weather = document.querySelector(".weather");
const city = document.querySelector(".city");
const API_KEY = "e08da1a19763570c401f8e633f939541";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

    fetch(url)
    .then((response) => response.json())
    .then((data)=>{
        city.innerHTML = data.name;
        weather.innerHTML = `<span>${data.weather[0].description}</span> <span>${Math.floor(data.main.temp)}°C</span>`
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);