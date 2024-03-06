// app.js
angular.module('chatApp', [])
.controller('ChatController', function() {
  var vm = this;
  vm.messages = [];
  vm.newMessage = '';

  vm.sendMessage = function() {
    if (vm.newMessage.trim() !== '') {
      vm.messages.push({ sender: 'Me', body: vm.newMessage });
      vm.newMessage = '';
    }
  };
});
