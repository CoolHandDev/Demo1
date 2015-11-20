/**
 * Created by mgarcia on 11/2/2015.
 */
'use strict';

(function(app){

        app.controller('route1Controller', function($scope, service1){

            var pizza = {
                name: "Margherita",
                type: "Neapolitan",
                flour_type: "00",
                toppings: [{type: "crushed San Marzano tomatoes"},
                    {type: "mozzarella cheese"},
                    {type: "basil"},
                    {type: "extra virgin olive oil"},
                    {type: "parmegiano-reggiano cheese"}]
            }


            $scope.pizzaTopping = 'cheese';
            $scope.pizzaDisplay = pizza;

            service1.service1Function1();

            $scope.submitPizza = service1.submitData;

        });
}
)(angular.module('demo1'));