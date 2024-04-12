'use strict';

angular.module("app")

.factory('orders', ['$http', '$q', 'COOLSTORE_CONFIG', 'Auth', '$location', function($http, $q, COOLSTORE_CONFIG, $auth, $location) {
    var factory = {}, orders,baseUrl;

	baseUrl = 'https://orders-node-dev.apps.ci-ln-wfw1mxt-76ef8.aws-2.ci.openshift.org/api/orders';
	// baseUrl = $location.protocol() + '://order-' + COOLSTORE_CONFIG.OCP_NAMESPACE + '.' + $location.host().replace(/^.*?\.(.*)/g,"$1") + '/api/orders';
	//baseUrl = $location.protocol() + '://localhost:3000/api/orders';
    factory.getOrders = function() {

        var deferred = $q.defer();
		$http({
			   method: 'GET',
			   url: baseUrl
		   }).then(function(resp) {
				orders = resp.data;
			   	deferred.resolve(resp.data);
		   }, function(err) {
			   	deferred.reject(err);
		   });
		return deferred.promise;
    };

	return factory;

}]);
