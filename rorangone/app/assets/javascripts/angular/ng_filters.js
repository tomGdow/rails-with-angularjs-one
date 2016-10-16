'use strict';
/* Filters */
angular.module('myApp.filters', []).
filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}])
.filter('dabbbleDate', function ($filter) {
  //Modified from Team Treehouse Angular Video (Jim Hoskins)
  //See; http://teamtreehouse.com/library/building-with-angularjs-and-apis
  return function (datestr, format) {
    return $filter('date')(Date.parse(datestr) || datestr, format);
  }
});
