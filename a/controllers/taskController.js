app.controller('taskController', function($scope, localStorageService) {
  if (localStorageService.get("mes") != null) 
  {
    $scope.tasks = localStorageService.get("mes");           
  } 
  else 
  {
   $scope.tasks = [];
    localStorageService.set("mes", $scope.tasks)
  }
  $scope.handler = function(id){
    var a = $scope.tasks[id].name;
    console.log(a);
  }
  $scope.dateTime = {pubdate: new Date(),}
  function PacClass( name, surname, age, sex, email)
  {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.email = email;
  }
  $scope.addtask = function() {
    var student = new PacClass( $scope.task.name, $scope.task.surname, $scope.task.age, $scope.task.sex, $scope.task.email)
    $scope.tasks.push($scope.task);
    console.log($scope.task);
    $scope.task = {};
    localStorageService.set("mes", $scope.tasks);
  };
  $scope.removeItem = function(index) {
    $scope.tasks.splice(index, 1);
    localStorageService.set("mes", $scope.tasks);
  };
});