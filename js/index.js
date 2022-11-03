function renderWeatherElements(weather) {
  console.log(weather);
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  let paramLocation = document.createElement('p');
  let paramTemp = document.createElement('p');
  let createDataLocal = paramLocation.innerText ='Location:' + weather.name;
  let createDataTemp = paramTemp.innerText =
  'Temp:' + weather.main.temp + 'C';
  location.append(paramLocation);
  temperature.append(paramTemp);
}


async function getWeatherData(query) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=d6ca49aaa32170856a0c02953f6e0d4f";

  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const errorMessage = `"Error occured," ${response.status}`;

    throw new Error(errorMessage);
  }

}

getWeatherData().catch((error) => {
  error.errorMessage;
});


