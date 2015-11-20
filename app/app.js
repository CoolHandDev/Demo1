'use strict';

(function(app){

        angular.module('demo1', ['ngRoute'])
            .config(function($routeProvider, $locationProvider){
                $routeProvider
                    .when('/route1', {
                        controller: "route1Controller",
                        templateUrl: "templates/route1Template.html",
                        caseInsensitiveMatch: true
                    });
                $locationProvider.html5Mode(true);
            }
        );
    }

)();
