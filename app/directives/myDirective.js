/**
 * Created by Elise on 11/5/2015.
 */

'use strict';

(function(app){
        app.directive('myDirective',[ function(){
            return{
                restrict:"E",
                templateUrl: "templates/myDirective.html"
            };
        }])
    }
)(angular.module('demo1'));
