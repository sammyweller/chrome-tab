let savedContent = localStorage.getItem('noteContent');
  if (savedContent) {
    document.getElementById('noteContent').value = savedContent;
  }

  // Save content to local storage when the user types
  document.getElementById('noteContent').addEventListener('input', function() {
    let content = this.value;
    localStorage.setItem('noteContent', content);
  });



  //weather:

  document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '2b9e843ecf76435fa49192801231010';
    const city = 'Atlanta';
    
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&unit=f`;

    const weatherInfoElement = document.getElementById('weather-info');

    // Make an API request
    fetch(apiUrl)
        .then(response => response.json())
        .then(weatherData => {
            const temperature = weatherData.current.temp_f;
            const condition = weatherData.current.condition.text;

            // Update the HTML content with the weather information
            weatherInfoElement.textContent = `Current weather: ${temperature}°F, ${condition}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoElement.textContent = 'Failed to fetch weather data';
        });
});