sasApp.service('deleteItemService', ['$q','$http', function($q , $http){
	
	return {
		deleteItem: function(Item){
			var deferred=$q.defer();

			$http({
				method:'POST',
				url:'http://127.0.0.1:34343/deletingItem',
				data: {item_code:Item.item_code},
				responseType:'text/json'
			})
			.success(function(data,header,config){
				//provide data on ui
				deferred.resolve(data);
			})
			.error(function(data,header,config){
				//error block
				deferred.reject(data);
			});
			
			return deferred.promise;
		
		
		}

	}
}])