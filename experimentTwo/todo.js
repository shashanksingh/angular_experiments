function TodoCtrl($scope) {
    
    $scope.todos = [
                    {text:"learn",done:true},
                    {text:"Dont Learn",done:false}
    ];

    $scope.getLength = function () {
        return $scope.todos.length; 
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText,done:false});
        $scope.formTodoText = "";
        $scope.totalTodo++;
    };

}
