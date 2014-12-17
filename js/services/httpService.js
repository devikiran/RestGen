app.service('httpService',function($http,$q)
{

return {

getResponse:function(apiUrl,verb)
{
		
			var deferred = $q.defer();

			var req = {
							 method:verb,
 							 url: apiUrl,
 					  }


						$http(req).success(function(data) {
											deferred.resolve(data);
										});

			/*$http.get(apiUrl).success(function(data) {
				deferred.resolve(data);
			});
*/
			return deferred.promise;
		}
}


})