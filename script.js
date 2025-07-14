const apiKey = "06afa32a17eec414da08266000d3128c"; // Your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "❗ Please enter a city name.";
    return;
  }

  // Fetch weather data
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const humidity = data.main.humidity;

      result.innerHTML = `
        <p><strong>🌡️ Temperature:</strong> ${temp}°C</p>
        <p><strong>🌥️ Condition:</strong> ${condition}</p>
        <p><strong>💧 Humidity:</strong> ${humidity}%</p>
      `;
    })
    .catch(error => {
      result.innerHTML = "⚠️ Error fetching data. Check the city name or API key.";
      console.error("Error details:", error);
    });
}
