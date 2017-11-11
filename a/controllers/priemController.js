app.controller('priemController', function($scope, localStorageService) {
	if (localStorageService.get("mess") != null) 
  {
    $scope.prs = localStorageService.get("mess");           
  } 
  else 
  {
   $scope.prs = [];
    localStorageService.set("mess", $scope.prs)
  }
function PriemClass( name, pac, zav)
{
  this.name = name;
  this.zav = zav;
  this.pac = [];
}

  $scope.addOtd = function() {
  	 var stu = new PriemClass( $scope.pr.name, $scope.pr.zav)
    $scope.prs.push($scope.pr);
    console.log($scope.pr);
    $scope.pr = {};
    localStorageService.set("mess", $scope.prs);
  };
  $scope.removeItem = function(index) {
    $scope.prs.splice(index, 1);
    localStorageService.set("mess", $scope.prs);
  };
});