app.service('httpService',function($http,$q)
{

return {

getResponse:function(apiUrl)
{
		
			var deferred = $q.defer();

			$http.get(apiUrl).success(function(data) {
				deferred.resolve(data);
			});

			return deferred.promise;
		}
}


})