app.controller('submitCtrl',function($scope,httpService){
	 $scope.details = {};
	 $scope.response={};
	 $scope.activity = {
        
        currentActivity: "POST"
    };

   

		$scope.newPlace = {
			cities: []
		}
		$scope.inputHeaders=new Array();

		$scope.addCity = function(key,value) {

			
			var headerObj = new Object();
			//headerObj.set(key,value);
			headerObj.key=key;
			headerObj.value=value;
			//headerobjects.push(headerObj);

			//$scope.newPlace.cities.push(headerObj);
			$scope.inputHeaders.push(headerObj);
			console.log(key+'input values '+value)
			$scope.details.header.key = '';
			$scope.details.header.value='';
			//$scope.index++;
		};

		$scope.removeCity=function(key){
			console.log('key is '+key);
			$scope.inputHeaders.splice(key,1);
			//delete $scope.newPlace.cities[key];
			//$scope.newPlace.cities.splice(key, 1);
			console.log('deleted '+$scope.newPlace.cities);
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
	/*	var headers=$scope.inputHeaders;
		for(var i=0;i<=headers.length;i++)
			{
				
			//console.log('inital '+headers[i].value)
			console.log('headers key '+headers[i].key +'value is '+headers[i].value);
			
			}*/
			$scope.testHeaders={};

			$scope.inputHeaders.forEach(function (username, userId) {
 						 console.log(userId, username); 
 						 console.log(username.key);console.log(username.value);
 						 $scope.testHeaders[username.key] = username.value;
  
					});



			console.log('json '+JSON.stringify($scope.testHeaders))
		   
		alert('url is '+$scope.details.apiUrl);
		var res=httpService.getResponse($scope.details.apiUrl,$scope.activity.currentActivity,$scope.testHeaders);
		
		res.then(function(data)
		{
			console.log('result '+data.login);
			console.log('result '+data.toString());
			$scope.details.response=JSON.stringify(data);
		})
	}

})