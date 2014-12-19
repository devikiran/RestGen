app.controller('submitCtrl',function($scope,httpService){
	 $scope.details = {};
	 $scope.response={};
	$scope.activity = {
        
        currentActivity: "POST"
    };

    $scope.addPlace = function(newPlace) {

			if ($scope.countryForm.$invalid) {
				alert('invalid, aborting aborting');
			} else {
				var place = angular.copy(newPlace);

				place.flag = $scope.flags[$scope.index];

				placesData.addPlace(place);
			}
		}

		$scope.newPlace = {
			cities: []
		}

		$scope.addCity = function(key,value) {

			console.log('key is '+key +'value is '+value);
			var headerObj = new Object();
			headerObj.key=key;
			headerObj.value=value;
			/*headerobjects.push(headerObj);*/

			$scope.newPlace.cities.push(headerObj);

			$scope.details.header.key = '';
			$scope.details.header.value='';
			$scope.index++;
		};

		$scope.removeCity=function(key){
			console.log('key is '+key);
			//delete $scope.newPlace.cities[key];
			$scope.newPlace.cities.splice(key, 1);
			console.log($scope.newPlace.cities);
			$scope.key--;
		};
 
    $scope.activities =
    [
        "GET",
        "POST",
        "PUT",
        "Delete"
    ];  


       
	$scope.submit=function(details)
	{
		   
		alert('url is '+$scope.details.apiUrl);
		var res=httpService.getResponse($scope.details.apiUrl,$scope.activity.currentActivity);
		
		res.then(function(data)
		{
			console.log('result '+data.login);
			console.log('result '+data.toString());
			$scope.details.response=JSON.stringify(data);
		})
	}

})