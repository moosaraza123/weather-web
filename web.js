const apikey="224cdbaccbe8a0966fcc90b8a24d4690";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const search_btn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon")

async function checkWeather(city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);
    var data=await response.json();
    console.log(data)
document.querySelector('.city').innerHTML=data.name;
document.querySelector('.temp').innerHTML=Math.round( data.main.temp)+ " °C";
document.querySelector('.humidity').innerHTML=data.main.humidity+" %";
document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
if (data.weather[0].main=='Clouds'){
    weatherIcon.src='images/clouds.png';
}
else if (data.weather[0].main=='Clear'){
    weatherIcon.src='images/clear.png';
}
if (data.weather[0].main=='Rain'){
    weatherIcon.src='images/rain.png';
}
if (data.weather[0].main=='Drizzle'){
    weatherIcon.src='images/drizzle.png';
}
if (data.weather[0].main=='Mist'){
    weatherIcon.src='images/Mist.png';
}
document.querySelector(".weather").style.display="block";
}


search_btn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})