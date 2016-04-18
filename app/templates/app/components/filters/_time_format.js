'use strict';

angular.module('<%= _.slugify(appname) %>')
  .filter('timeFormat', function(){

    return function (d){
      return moment(new Date(d)).format('YYYY-MM-DD HH:mm:ss')
    }

  })
;
