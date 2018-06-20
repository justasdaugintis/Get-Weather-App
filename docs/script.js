updateWeather = (data) => {
                let name = document.getElementById("city");
                let cloudiness = document.getElementById("cloudiness");
                let temperature = document.getElementById('temperature');
                let humidity = document.getElementById('humidity');
                let wind = document.getElementById('wind');
                let windSpeed = document.getElementById('windSpeed');
                let images = document.getElementById('pic');
                images.style = "width: 110px"
                images.style = "height: 110px"
                name.innerHTML = data.city.name + ", " + data.city.country
                cloudiness.innerHTML = data.list[0].weather[0].description;
                temperature.innerHTML = Math.floor(data.list[0].main.temp) + "°C"
                humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + "%"
                images.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"
                wind.innerHTML = windDir(data.list[0].wind.deg)
                windSpeed.innerHTML = "Wind Speed: " + data.list[0].wind.speed + " m/s " + " - " + windMessage(data.list[0].wind.speed)
}

function windDir(deg){
        let direction = ["North", "North East", "East", "South East", "South", "South West", "West", "North West", "North"];
        let message = "Wind direction: ";
        let index = Math.round(deg/45);
        message += direction[index];
        return message;
}       


function windMessage(speed){
        let wind = [[0.3, "Calm"],[1.5, "Light Air"], [3.3, "Light Breeze"], [5.5, "Gentle Breeze"],
        [7.9, "Moderate Breeze"], [10.7, "Fresh Breeze"], [13.8, "Strong Breeze"], [17.1, "High Wind"], 
        [20.7, "Gale, Fresh Gale"],  [24.4, "Strong/Sever Gale"], [28.4, "Storm, Whole Gale"], 
        [32.6, "Violent Storm"], [32.7, "Hurricane Force"] ];   
        let i = 0
        while (speed > wind[i][0] && i < wind.length ) {
                i++
        };    
        return wind[i][1];
}


getWeather = () => {
        document.getElementById("submit").addEventListener("click", function (){
                const e = document.getElementById("input");
                let value = e.value;
                let error = document.getElementById("error");

        if(e.value === '') {
                error.innerHTML = "Please type in a city"
               }
        else {
                error.innerHTML = ''
                var apiKey = 'fcf986e2bc92f5bdfd5194ab438b6ee8'
        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${apiKey}`)
        .then( response => response.json())
        .then (data => {
                console.log(data);
                if (data.message === "city not found"){
                        error.innerHTML = "City not found"
                }
                else {
                        error.innerHTML = ''
                }
                if(data){
                updateWeather (data);
                }
        })
}
        });
}
                getWeather();