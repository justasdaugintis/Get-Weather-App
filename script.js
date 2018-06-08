

getWeather = () => {
        document.getElementById("submit").addEventListener("click", function (){
                const e = document.getElementById("input");
                let value = e.value;
                let error = document.getElementById("error");
                let name = document.getElementById("city");
                let cloudiness = document.getElementById("cloudiness");
                let temperature = document.getElementById('temperature');
                let humidity = document.getElementById('humidity');
                let wind = document.getElementById('wind');
                let windSpeed = document.getElementById('windSpeed');
                let images = document.getElementById('pic');
              

               if(e.value === '') {
                error.innerHTML = "Please type in a city"
               }
               else {
                error.innerHTML = ''
                fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=fcf986e2bc92f5bdfd5194ab438b6ee8`)
        .then( response => response.json())
        .then (data => {
                console.log(data);
                

                if (data.message === "city not found"){
                        error.innerHTML = "City not found"

                }
                else {
                        error.innerHTML = ''
                }
                updateWeather = () => {
                        if (data) {
// displaying some parameters
                                name.innerHTML = data.city.name + ", " + data.city.country
                                //cloudiness.innerHTML = data.list[0].weather[0].description;
                                temperature.innerHTML = Math.floor(data.list[0].main.temp) + "°C"
                                humidity.innerHTML = "Humidity: " + data.list[0].main.humidity + "%"

// Weather icon display logic
                                if (data.list[0].weather[0].description === "clear sky"){
                                        images.src = "images/sun.svg"
                                        images.display = "block";
                                }
                                else if (data.list[0].weather[0].description === "scattered clouds"){
                                        images.src = "images/clouds.svg"
                                        images.display = "block";
                                }
                                else if (data.list[0].weather[0].description === "rain"){
                                        images.src = "images/rain.svg"
                                        images.display = "block";
                                }
                                else if (data.list[0].weather[0].description  === "few clouds"){
                                        images.src = "images/cloud-sun.svg"
                                        images.display = "block";
                                }
                                else if (data.list[0].weather[0].description  === "shower rain"){
                                        images.src = "images/cloud-rain.svg"
                                        images.display = "block";
                                }
                                else if (data.list[0].weather[0].description  === "moderate rain"){
                                        images.src = "images/cloud-drizzle.svg"
                                        images.display = "block";
                                }
                                else if (data.list[0].weather[0].description  === "light rain"){
                                        images.src = "images/cloud-drizzle.svg"
                                        images.display = "block";
                                }


//Wind parameters logic/display
                                if(data.list[0].wind.deg > 30 && data.list[0].wind.deg < 60){
                                        wind.innerHTML = "Wind direction: North East"
                                }
                                else if (data.list[0].wind.deg > 60 && data.list[0].wind.deg < 120){
                                        wind.innerHTML = "Wind direction: East"
                                }
                                else if (data.list[0].wind.deg > 120 && data.list[0].wind.deg < 150){
                                        wind.innerHTML = "Wind direction: South East"
                                }

                                else if (data.list[0].wind.deg > 150 && data.list[0].wind.deg < 210){
                                        wind.innerHTML = "Wind direction: South"
                                }

                                else if (data.list[0].wind.deg > 210 && data.list[0].wind.deg < 240){
                                        wind.innerHTML = "Wind direction: South West"
                                }
                                else if (data.list[0].wind.deg > 240 && data.list[0].wind.deg < 300){
                                        wind.innerHTML = "Wind direction: West"
                                }

                                else if (data.list[0].wind.deg > 300 && data.list[0].wind.deg < 330){
                                        wind.innerHTML = "Wind direction: North West"
                                }
                                else if (data.list[0].wind.deg > 330 || data.list[0].wind.deg < 30 ){
                                        wind.innerHTML = "Wind direction: North"
                                }
                                

//wind speed parameters logic/display
                                if (data.list[0].wind.speed < 0.3 ) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Calm"
                                }
                                else if (data.list[0].wind.speed <= 1.5 && data.list[0].wind.speed >= 0.3) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Light Air"
                                }
                                else if (data.list[0].wind.speed <= 3.3 && data.list[0].wind.speed >= 1.6) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Light Breeze"
                                }
                                else if (data.list[0].wind.speed <= 5.5 && data.list[0].wind.speed >= 3.4) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Gentle Breeze" 
                                }
                                else if (data.list[0].wind.speed <= 7.9 && data.list[0].wind.speed >= 5.5) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Moderate Breeze"
                                }
                                else if (data.list[0].wind.speed <= 10.7 && data.list[0].wind.speed >= 8) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Fresh Breeze"
                                }
                                else if (data.list[0].wind.speed <= 13.8 && data.list[0].wind.speed >= 10.8) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " Strong Breeze"
                                }
                                else if (data.list[0].wind.speed <= 17.1 && data.list[0].wind.speed >= 13.9) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + " High Wind"
                                }
                                else if (data.list[0].wind.speed <= 20.7 && data.list[0].wind.speed >= 17.2) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + "Gale, Fresh Gale"
                                }
                                else if (data.list[0].wind.speed <= 24.4 && data.list[0].wind.speed >= 20.8) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + "Strong/Severe Gale"
                                }
                                else if (data.list[0].wind.speed <= 28.4 && data.list[0].wind.speed >= 24.5) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + "Storm, Whole Gale"
                                }
                                else if (data.list[0].wind.speed <= 32.6 && data.list[0].wind.speed >= 28.5) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + "Violent Storm"
                                }
                                else if (data.list[0].wind.speed >= 32.7) {
                                        windSpeed.innerHTML = "Speed: " + data.list[0].wind.speed + " m/s" + "Hurricane Force"
                                }
                            
                               
                        }

                
                
                }
         
                
                updateWeather ();
        })
}
        });
}
        getWeather();

