// app.js
angular.module('dashboardApp', [])
.controller('DashboardController', function() {
  var vm = this;
  vm.lastUpdated = '';

  // Function to update real-time data
  function updateRealTimeData() {
    // Implement data retrieval logic here
    // Example: Fetch data from an API
    vm.lastUpdated = new Date().toLocaleString();
    setTimeout(updateRealTimeData, 10000); // Update data every 10 seconds
  }

  updateRealTimeData(); // Initial call to start updating data
});
