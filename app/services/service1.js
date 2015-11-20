'use strict';

(function(app){

        app.factory('service1', ['$http', function($http){

            var service1Function1 = function() {
                console.log('this is service1Function1');
            };
            var submitData = function(data){
                $http({
                    method: "post",
                    url: "/orderPizza",
                    data: data
                }).then(function successCallBack(response){
                    console.log('success')
                },function errorCallBack(response){
                    console.log('fail')
                })
            };

            return{
                service1Function1: service1Function1,
                submitData: submitData
            }
        }])
})(angular.module('demo1'));