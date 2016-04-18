'use strict';

angular.module('<%= _.slugify(appname) %>', [ 'ui.router','ui.bootstrap','ngSanitize','templates' ])
	.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

		$stateProvider
			.state('users',{
				url: '/users',
				templateUrl:'main/user/users.html',
				controller: 'usersCtrl'
			});

		$urlRouterProvider.otherwise('/users');

	}])
	.run(function(){
		console.log('ready');
	});
