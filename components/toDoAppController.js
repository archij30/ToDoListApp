(function () {

    let ToDoAppController = function ($scope) {
        let tm = this;
        $scope.dateTime = Date.now();
        $scope.quote = "The best is yet to come! Keep Going...";
        $scope.tasks = [];
        tm.newTask = {
            name: "",
            isCompleted: false,
            description: "",
            isHighPriority: false
        }

        tm.addNewTask = function () {
            $scope.tasks.push(angular.copy(tm.newTask));
            tm.newTask = {
                name: "",
                isCompleted: false,
                description: "",
                isHighPriority: false
            };
        }

        tm.deleteTask = function (id) {
            let n = $scope.tasks.length;
            if (id >= n || id < 0) return;
            $scope.tasks.splice(id,1);
        }



    }

    ToDoAppController.$inject = ["$scope"];
    angular.module("toDoApp", []).controller("toDoAppController", ToDoAppController);

})();