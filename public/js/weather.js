let inputValue = document.getElementById("search")
let search = document.getElementById("btn")
let city = document.getElementById("cityName")
let temperature = document.getElementById("temperature_value")
let humidity = document.getElementById("humidity_value")
let wind = document.getElementById("wind_value")

let getInfo = async (e) => {
    e.preventDefault()
    let cityValue = inputValue.value
    if (cityValue == "") {
        alert("please enter city name before search")
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
            let response = await fetch(url)
            let data = await response.json()
            city.textContent = `${data.name} / ${data.sys.country}`
            temperature.textContent = data.main.temp
            humidity.textContent = data.main.humidity
            wind.textContent = data.wind.speed
        } catch {
            alert("please enter a valid city name")
        }
    }
}
search.addEventListener("click", getInfo)
