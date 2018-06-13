function windSpeedMessagefunc (windVel){
        windSpeedMessage = "Wind speed: " + windVel + "m/s ";
        //values are max speeds of a category
        windSpeeds =    [[0.3, "Calm"],
                        [1.6, "Light Air"],
                        [3.4, "Light Breeze"],
                        [5.5, "Gentle Breeze"],
                        [8, "Moderate Breeze"],
                        [10.8, "Fresh Breeze"],
                        [13.9, "Strong Breeze"],
                        [17.2, "High Wind"],
                        [20.8, "Gale, Fresh Gale"],
                        [24.5, "Strong/Severe Gale"],
                        [28.5, "Storm, Whole Gale"],
                        [32.7, "Violent Storm"],
                        [9999, "Hurricane Force"]];
        let i = 0;
        while (windSpeeds[i][0] < windVel && i < windSpeeds.length){
                i++;
        }
        windSpeedMessage += windSpeeds[i][1];
        return windSpeedMessage;
}

function windDirectionMessage(windDeg){
        let windMessage = "Wind direction: "
        windDirections = ["North", "North East", "East", "South East", "South",
                        "South West", "West", "North West", "North"]
        windIndex = Math.round((windDeg/45));
        windMessage += windDirections[windIndex];
        return windMessage;
}



function updateWeather(data){
        let name = document.getElementById("city");
        let cloudiness = document.getElementById("cloudiness");
        let temperature = document.getElementById('temperature');
        let humidity = document.getElementById('humidity');
        let wind = document.getElementById('wind');
        let windSpeed = document.getElementById('windSpeed');
        let images = document.getElementById('pic');
        name.innerHTML = data.city.name + ", " + data.city.country
        temperature.innerHTML = Math.floor(data.list[0].main.temp) + "°C"
        images.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
        images.display = "flex";
        humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + "%"
        wind.innerHTML = windDirectionMessage(data.list[0].wind.deg);
        windSpeed.innerHTML = windSpeedMessagefunc(data.list[0].wind.speed);
        //cloudiness.innerHTML = data.list[0].weather[0].description;
}

getWeather = () => {
        document.getElementById("submit").addEventListener("click", function (){
                const e = document.getElementById("input");
                let value = e.value;
                let error = document.getElementById("error");
                let images = document.getElementById('pic');
                images.style = "width: 100px;"
                images.style = "height:100px"
                if(e.value === '') {
                        error.innerHTML = "Please type in a city"
                }else {
                        error.innerHTML = ''
                        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=fcf986e2bc92f5bdfd5194ab438b6ee8`)
                        .then( response => response.json())
                        .then (data => {
                                console.log(data)
                        if (data.message === "city not found"){
                                error.innerHTML = "City not found"
                        }
                        else {
                                error.innerHTML = ''
                        }
                        if (data) {
                                updateWeather (data);
                        }
                        }
                        )
                }
        });
}
getWeather();



