angular.module('TacoApp', [])
.controller('MainCtrl', ['$scope', function($scope) {

	  // Initialize taco shops array
	  $scope.tacoShops = [];

	  $scope.generateTacoShop = function(name, address, city, state, zip, style) {
	  	var tacoShop = {
  			name: name,
  			address: address,
  			city: city,
  			state: state,
  			zip: zip,
  			style: style
	  	};
	  	return tacoShop;
	  }

		tacoShop = $scope.generateTacoShop("A shop", "1234 A Street", "Provo", "Utah", 84606, "Authentic");
	  	$scope.tacoShops.push(tacoShop);
		var tacoShop = $scope.generateTacoShop("B shop", "1234 B Street", "Provo", "Utah", 84606, "TexMex");
		$scope.tacoShops.push(tacoShop);	

      // Function for creating adding taco shops
      // thru the UI
	  $scope.addTacoShop = function() {
  		var tacoShop = $scope.generateTacoShop(
  			$scope.formName,
  			$scope.formAddress,
  			$scope.formCity,
  			$scope.formState,
  			$scope.formZip,
  			$scope.formStyle
		);
  		$scope.tacoShops.push(tacoShop);
  		console.log("About to add a new taco shop: " + tacoShop);
  		console.log($scope.tacoShops);
	  };	

	}
]);