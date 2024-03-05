angular.module('WeatherApp', [])
    .controller('WeatherController', ['$http', function($http) {
        var self = this;
        self.getWeather = function() {
            var apiKey = '66497fa66d431ef831ca8312be09fe4b'; // Replace with your OpenWeatherMap API key
            var apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
            var city = self.cityName;
            var units = 'metric'; // or 'imperial' for Fahrenheit

            var requestUrl = apiUrl + '?q=' + city + '&units=' + units + '&appid=' + apiKey;

            $http.get(requestUrl)
                .then(function(response) {
                    self.weatherData = response.data;
                })
                .catch(function(error) {
                    console.error('Error fetching weather data:', error);
                });
        };
    }]);
