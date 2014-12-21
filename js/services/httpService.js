app.service('httpService',function($http,$q)
{

return {

getResponse:function(apiUrl,verb,inputheaders)
{			/*console.log(' headers.size '+inputheaders.length);
			for(var i=1;i<=inputheaders.length+1;i++)
			{
				
					//console.log('inital '+headers[i].value)
					console.log(' map index '+ i +'headers key '+inputheaders[i].key +'value is '+inputheaders[i].value);
			
			}*/

			var inputParam= {
       		 'country-code': 'IN',
        	  'number': '9663898428' 
   							 }

   			
			var deferred = $q.defer();

				var req = {
							 method:verb,
 							 url: apiUrl,
 							 headers:inputheaders,
 							 params:inputParam,
 							 }

 					  console.log(req);


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