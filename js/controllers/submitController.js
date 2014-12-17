app.controller('submitCtrl',function($scope,httpService){
	 $scope.details = {};
	 $scope.response={};
	$scope.activity = {
        
        currentActivity: "POST"
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