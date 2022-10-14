let weather =fetch("http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e")
let mainTemp=document.getElementById("mainTemp")
let subTemp=document.getElementById("subTemp")
weather.
then(data=>data.json()).then(weather=>
    {
        // console.log(weather)
         mainTemp.textContent=`${weather.main.temp}`
         subTemp.textContent=`${weather.main.temp_max}/${weather.main.temp_min}`
     }
)