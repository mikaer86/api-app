async function renderWeatherElements(weather) {
  console.log(weather);
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  let paramLocation = document.createElement('p');
  let paramTemp = document.createElement('p');
  let createDataLocal = paramLocation.innerText ='Location:' + await weather.name;
  let createDataTemp = paramTemp.innerText =
  'Temp:'+ await weather.main.temp + 'C';
  location.append(paramLocation);
  temperature.append(paramTemp);
}


async function getWeatherData(query) {
 
 let key = 'd6ca49aaa32170856a0c02953f6e0d4f';
 let url =
 "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=" + key + " ";
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const errorMessage = `"Error occured," ${response.status}`;

    throw new Error(errorMessage);
  } 
  
   

   

    console.log(  renderWeatherElements(data));


}

getWeatherData().catch((error) => {
  error.errorMessage;
});



getWeatherData("Stockholm");


