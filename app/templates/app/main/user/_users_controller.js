'use strict';

angular.module('<%= _.slugify(appname) %>')
    .controller('usersCtrl', ['$scope', function($scope){

        $scope.users = [{
            id: 1, name: 'aleelock', createdAt: '2016-04-18T11:45:00.170Z'
        },{
            id: 2, name: 'john', createdAt: '2016-04-18T11:45:01.170Z'
        }];

    }])
;
