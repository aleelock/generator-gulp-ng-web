'use strict';

angular.module('<%= _.slugify(appname) %>')
    .controller('usersCtrl', ['$scope', function($scope){

        $scope.users = [{
            id: 1, name: 'aleelock'
        },{
            id: 2, name: 'john'
        }];

    }])
;
