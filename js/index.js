 //render the the weather data with the html elements
 function renderWeatherElements(weather) {
  console.log(weather);
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  let paramLocation = document.createElement('p');
  let paramTemp = document.createElement('p');
  let createDataLocal = paramLocation.innerText ='Location:' + weather.name;
  let createDataTemp = paramTemp.innerText =
  'Temp:'+ weather.main.temp + 'C';
  location.append(paramLocation);
  temperature.append(paramTemp);
}


// fetch data regarding city and local temperature

async function getWeatherData(query) {
 //  authorization key
 let key = "d6ca49aaa32170856a0c02953f6e0d4f";
 // api url
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const errorMessage = `"Error occured," ${response.status}`;

    throw new Error(errorMessage);
  } 
  
   console.log(renderWeatherElements(data));


}

getWeatherData().catch((error) => {
  error.errorMessage;
});



getWeatherData("Stockholm");


