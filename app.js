const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
}
