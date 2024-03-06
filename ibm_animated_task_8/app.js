angular.module('todoApp', [])
    .controller('TodoController', function() {
        var vm = this;

        vm.tasks = [];

        vm.addTask = function() {
            if (vm.newTask.trim() !== '') {
                vm.tasks.push({ name: vm.newTask, removed: false });
                vm.newTask = '';
            }
        };

        vm.removeTask = function(task) {
            task.removed = true;
            setTimeout(function() {
                vm.tasks.splice(vm.tasks.indexOf(task), 1);
            }, 500); // Remove after 0.5 seconds
        };
    });
