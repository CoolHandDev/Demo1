/**
 * Created by Elise on 11/5/2015.
 */

'use strict';

(function(app){

        app.controller('myDirectiveController', function($scope){

            $scope.myDirectiveValue = "this is value from the myDirectiveController";

        });
    }
)(angular.module('demo1'));