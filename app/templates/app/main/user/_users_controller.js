'use strict';

angular.module('<%= _.slugify(appname) %>')
    .controller('usersCtrl', ['$scope','usersSvs', function($scope,usersSvs){

        usersSvs.list().then(function(result){
          $scope.users =  result;
        });

    }])
;
