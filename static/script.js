async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    const resultDiv = document.getElementById("weather-result");

    if (data.error) {
      resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
    } else {
      resultDiv.innerHTML = `
        <h2>${data.city}</h2>
        <p>🌡 Temperature: ${data.temp}°C</p>
        <p>☁ Condition: ${data.description}</p>
        <img src="http://openweathermap.org/img/wn/${data.icon}@2x.png" alt="weather icon">
      `;
    }
  } catch (err) {
    console.error("Error fetching weather:", err);
  }
}
