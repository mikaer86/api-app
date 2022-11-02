async function getWeatherData() {
  let key = d6ca49aaa32170856a0c02953f6e0d4f;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=2673730&appid=${key}`;

  let response = await fetch(url);
  const weatherData = await response.json();
  console.log(weatherData);

  if (!response.ok) {
    const errorMessage = `Error occured, ${response.status}`;

    throw new Error(errorMessage);
  }
}

getWeatherData().catch((error) => {
  error.errorMessage;
});
