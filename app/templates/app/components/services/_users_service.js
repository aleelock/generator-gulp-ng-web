'use strict';

angular.module('<%= _.slugify(appname) %>')
    .factory('usersSvs', ['BaseHttp','$q','$timeout', function($http, $q, $timeout){

       return {
         list: function(){
           var df = $q.defer();
           $timeout(function(){
             df.resolve([{
                 id: 1, name: 'aleelock', createdAt: '2016-04-18T11:45:00.170Z'
             },{
                 id: 2, name: 'john', createdAt: '2016-04-18T11:45:01.170Z'
             }]);
           },1000);
           return df.promise;
         }
       }

    }])
;
