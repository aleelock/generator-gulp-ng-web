'use strict';

angular.module('<%= _.slugify(appname) %>', [ 'ui.router','ui.bootstrap','ngSanitize','templates' ])
	.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

    moment.locale('en', {
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      }
    });
    moment.locale('zh-CN', {
      relativeTime: {
        future: "%s以后",
        past: "%s以前",
        s: "几秒",
        m: "1分钟",
        mm: "%d分钟",
        h: "1小时",
        hh: "%d小时",
        d: "1天",
        dd: "%d天",
        M: "1月",
        MM: "%d月",
        y: "1年",
        yy: "%d年"
      }
    });

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
