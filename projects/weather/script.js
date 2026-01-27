// http://openweathermap.org/img/wn/${weather[0].icon}@4x.png
let city_input = document.querySelector(".city-input");
let search_button = document.querySelector(".search-button");
let city_name = document.querySelector(".city-name");
let weather_desc = document.querySelector(".weather-desc");
let temp = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let wind_speed = document.querySelector(".wind-speed");
let temp_min = document.querySelector(".weather-min")
let temp_max = document.querySelector(".weather-max")
let condition = document.querySelector(".condition")
let search_btn = document.querySelector(".search-btn")
let img = document.querySelector(".img")
let date_time = document.querySelector(".date-time")
let country = document.getElementById("country");
// c187e7f86a909a404468a07d76f0eb7f

//? https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=079fb4f519af62fbf1e41f1f24ba53f4&units=metric
//? Fri Jan 23 2026 20:55:37 GMT+0500 (Pakistan Standard Time)

 



const weatherData = async (city) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=079fb4f519af62fbf1e41f1f24ba53f4&units=metric`;
    try {
        const response = await fetch(api);
        const data = await response.json();
        const {main, dt, name, sys, weather} = data;
        console.log("time", dt)
        temp.innerText = main.temp + "°";
        temp_min.innerText = "Min " + main.temp_min;
        temp_max.innerText = "Max " + main.temp_max ;
        condition.innerText = weather[0].main
        img.src = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`
        city_name.innerText = name;
        let date = new Date(dt * 1000)
        date_time.innerText = new Intl.DateTimeFormat("en-US").format(date);
        console.log(new Intl.DateTimeFormat("en-US").format(date));
        //  = sys.country;
        const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
        country.innerText = regionNamesInEnglish.of(sys.country)
        console.log(main);
        console.log(data)
    } catch (error) {
        console.log("error", error)
    }
}

search_btn.addEventListener("click", () => {
    let city = city_input.value
    weatherData(city);
});
window.addEventListener("load", () => {
    weatherData("faisalabad");
});