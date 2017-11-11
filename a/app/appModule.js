var app = angular.module("app", ['ngRoute', 'LocalStorageModule','ngAnimate','ngMessages'])
	.config(function(localStorageServiceProvider) {
	    			localStorageServiceProvider
	    				.setPrefix('Test')
	    				.setStorageType('sessionStorage')
	    				.setNotify(true, true)
	    		})
	.config(function($routeProvider){
        		$routeProvider
	            .when("/Pac", {
	                templateUrl : "views/pac.html",
	                controller : "taskController"
	            })
                .when("/Priem", {
                    templateUrl : "views/priem.html",
                    controller : "priemController"
                })
              })