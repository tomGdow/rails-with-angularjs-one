'use strict';
/* Services */
angular.module('myApp.services', [])
.value('version', '0.1')
.constant('constants', {

  APP_TITLE: 'Angular with Rails 5',
  APP_OWNER: 'Tom Doe',
  TEMPLATE_ONE_TITLE: 'Template 1',
  TEMPLATE_TWO_TITLE: 'Template 2',
  TEMPLATE_THREE_TITLE: 'Template 3',
  TEMPLATE_FOUR_TITLE: 'Template 4',
  TEMPLATE_FIVE_TITLE: 'Template 5',
  TEMPLATE_SIX_TITLE: 'Template 6',
  APP_DESCRIPTION: 'A Single Page Application with Ruby on Rails and Angular',
  APP_VERSION: '1.0'

})
.factory('functions', function () {

  function makeLastName (string) {
    var mystring = string.split(' ');
    if (mystring.length > 1) {
      return mystring[1];
    }
    return string;
  };

  function makeFirstName (string) {
    var mystring = string.split(' ');
    if (mystring.length > 1) {
      return mystring[0];
    }
    return string;
  };

  function greeting (string) {
    return "Greetings from " +  string;
  };

  function activeNav (location){
    //make navbar active tab correspond with url hash
    function activeHelper(arg) {
      return arg.test(location);
    };

    var data = {
      "nav1" : {"url": "view1", "class": "home"},
      "nav2" : {"url": "view2", "class": "viewtwo"},
      "nav3" : {"url": "view3", "class": "viewthree"},
      "nav4" : {"url": "view4", "class": "viewfour"},
      "nav5" : {"url": "view5", "class": "viewfive"},
      "nav6" : {"url": "view6", "class": "viewsix"},
    }; 

    switch (true) {
      case activeHelper(RegExp(data.nav1.url)):
        return  data.nav1.class;
        break;
      case activeHelper(RegExp(data.nav2.url)):
        return data.nav2.class;
        break;
      case activeHelper(RegExp(data.nav3.url)):
        return data.nav3.class;
        break;
      case activeHelper(RegExp(data.nav4.url)):
        return  data.nav4.class;
        break;
      case activeHelper(RegExp(data.nav5.url)):
        return  data.nav5.class;
        break;
      case activeHelper(RegExp(data.nav6.url)):
        return  data.nav6.class;
        break;
      default:
        return data.nav1.class;
    }
  }
  return {
    makeLastName: makeLastName,
    makeFirstName: makeFirstName,
    greeting: greeting,
    activeNav: activeNav,
  };
})
.factory('allIrelandData', function () {
  return {

    "football": [

    {"winners": 36,"name": "Kerry"},
    {"winners": 24,"name": "Dublin"},
    {"winners": 9,"name": "Galway"},
    {"winners": 7,"name": "Cork"},
    {"winners": 7,"name": "Meath"},
    {"winners": 5,"name": "Cavan"},
    {"winners": 5,"name": "Wexford"},
    {"winners": 5,"name": "Down"},
    {"winners": 4,"name": "Kildare"},
    {"winners": 4,"name": "Tipperary"},
    {"winners": 3,"name": "Mayo"},
    {"winners": 3,"name": "Offaly"},
    {"winners": 3,"name": "Louth"},
    {"winners": 3,"name": "Tyrone"},
    {"winners": 8,"name": "Others"}

    ],

    "hurling": [

    {"winners": 34,"name": "Kilkenny"},
    {"winners": 30,"name": "Cork"},
    {"winners": 26,"name": "Tipperary"},
    {"winners": 7,"name": "Limerick"},
    {"winners": 6,"name": "Dublin"},
    {"winners": 6,"name": "Wexford"},
    {"winners": 4,"name": "Galway"},
    {"winners": 4,"name": "Offaly"},
    {"winners": 4,"name": "Clare"},
    {"winners": 2,"name": "Waterford"},
    {"winners": 3,"name": "Others"}

    ]

  };

})
.factory('exampleDates', function () {
  return {

    "dateOne": "2016-09-23 20:22:34.993927",
    "dateTwo": "2014-09-13 22:21:54.443225"
  };

})
