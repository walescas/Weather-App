const apiKey = "30d1c28196448f3cc6c43a7db3727cc5";

const container = document.querySelector("#container");
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector(".search");

const cityElement = document.querySelector("#city");
const cityTemp = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIcon = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidity = document.querySelector("#humidity span");
const wind = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");


const getWeatherData = async(city) => {

    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data;
   

}




const showWeatherData = async(city) => {
 const data = await getWeatherData(city);
 



 cityElement.innerText = data.name;
 cityTemp.innerText = parseInt(data.main.temp);
 descElement.innerText = data.weather[0].description;
 weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
 countryElement.setAttribute("src", `https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`);
 humidity.innerText = `${data.main.humidity}%`;
 wind.innerText = `${data.wind.speed}km`;

weatherContainer.classList.remove("hide");

}


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;


    showWeatherData(city)
})

cityInput.addEventListener("keyup", (e) => {

     if(e.code === "Enter") {
        const city = e.target.value

        showWeatherData(city);
     }
})




