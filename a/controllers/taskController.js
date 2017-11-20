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
    console.log($scope.tasks[id]);
  }

  function PacClass( name, surname, age, sex, email, zhaloba1, zhaloba2, zhaloba3)
  {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.email = email;
    this.zhaloba1 = zhaloba1;
    this.zhaloba2 = zhaloba2;
    this.zhaloba3 = zhaloba3;
  }
  $scope.zhaloba = [];
  $scope.addtask = function() {
    var student = new PacClass( $scope.task.name, $scope.task.surname, $scope.task.age, $scope.task.sex, $scope.task.email, $scope.task.zhaloba3, $scope.task.zhaloba2, $scope.task.zhaloba1);
    $scope.tasks.push($scope.task);
    console.log($scope.task);
    $scope.task = {};
    localStorageService.set("mes", $scope.tasks);
  }
  $scope.removeItem = function(index) {
    $scope.tasks.splice(index, 1);
    localStorageService.set("mes", $scope.tasks);
  }
});