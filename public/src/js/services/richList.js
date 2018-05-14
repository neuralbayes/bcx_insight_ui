'use strict';

angular.module('insight.richList')
.factory('StatisticsRichestList', function($resource, $window) {
    	return $resource($window.apiPrefix + '/statistics/richest-addresses-list');
	});
