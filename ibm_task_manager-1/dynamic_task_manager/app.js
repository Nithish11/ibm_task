angular.module('taskManagerApp', [])
    .controller('TaskManagerController', function () {
        var vm = this;
        vm.tasks = [];
        vm.newTask = '';

        vm.addTask = function () {
            if (vm.newTask.trim() !== '') {
                vm.tasks.push(vm.newTask);
                vm.newTask = '';
            }
        };

        vm.editTask = function (index) {
            var editedTask = prompt("Edit task:", vm.tasks[index]);
            if (editedTask !== null) {
                vm.tasks[index] = editedTask;
            }
        };

        vm.deleteTask = function (index) {
            vm.tasks.splice(index, 1);
        };
    });
