console.log("script is running");

const apikey = "0532c1d8cb3c58fbb2d0924071039829"

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const WeaterIcon = document.querySelector(".weather-icon")

    

async function getWeather(city) {
    const responce = await fetch(url + city + `&appid=${apikey}`);
    var data = await responce.json();
    console.log(data);
    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humitity").innerHTML = data.main.humidity + "% ";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clear") {
        WeaterIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
        WeaterIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
        WeaterIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        WeaterIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        WeaterIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchbtn.addEventListener("click", () => {
    getWeather(searchbox.value)
})

