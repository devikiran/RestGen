app.controller('submitCtrl',function($scope,httpService){
	 $scope.details = {};
	 $scope.response={};
	
	$scope.submit=function(details)
	{
		   
		alert('url is '+$scope.details.apiUrl);
		var res=httpService.getResponse($scope.details.apiUrl);
		
		res.then(function(data)
		{
			console.log('result '+data.login);
			$scope.details.response=data;
		})
	}

})