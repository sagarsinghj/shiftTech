var scotchTodo = angular.module('scotchTodo', ['autocomplete']);

function mainController($scope, $http) {
	$scope.formData = {};
 $scope.data={};
	// when landing on the page, get all todos and show them

	$http.get('http://sagarsinghj-test.apigee.net/countries')
		.success(function(data) {
			console.log(">>>>>>>>>>>>>>",data);
			 $scope.data.availableOptions = ['India','China','USA','UAE'];
			$scope.countries  = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});


	// delete a todo after checking it
	$scope.getData = function(code) {
		$http.get('http://sagarsinghj-test.apigee.net/countryDetails/'+ code)
			.success(function(data) {
				 $scope.countryData = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}
