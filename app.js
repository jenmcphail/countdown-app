var app = angular.module('CountdownApp', ['ngRoute']);

console.log('Angular is working.');

// ROUTES
app.config(function($routeProvider, $locationProvider){
     $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    .when('/', {
        templateUrl: 'templates/events-index.html',
        controller: 'EventsIndexCtrl'
       
    })
    .when('/events/:id', {
        templateUrl: '/templates/events-show.html',
        controller: 'EventsShowCtrl'
    });
});


// CONTROLLERS
app.controller('EventsIndexCtrl', function($scope, EventService){
      console.log("Events Index");
      $scope.events = all_events;
    });
app.controller('EventsShowCtrl', function ($scope, EventService, $routeParams) {
    console.log($routeParams.id);
    $scope.event = EventService.get($routeParams.id);
  });
app.controller('EventsCtrl', function($scope){
  $scope.
})



// MODELS
app.factory('EventService', function(){

  var EventService = {};

  EventService.query = function(){
    return all_events;
  }

  EventService.get = function(id){
    var id = parseInt(id);
    return all_events.find(function(event){
      return event.id == id;
    });
  }

  return EventService;

})





// EVENTS SEED DATA

all_events = [
    {
        "id": 1,
        "name": "Christmas",
        "start_date": "12/25/2016",
        "description": "Christmas is an annual festival commemorating the birth of Jesus Christ. It is observed most commonly on December 25 as a religious and cultural celebration among billions of people around the world.",
        "image": "http://cdn.history.com/sites/2/2015/04/hith-father-christmas-lights-iStock_000029514386Large.jpg"
    },
    {
        "id": 2,
        "name": "Halloween",
        "start_date": "10/31/2016",
        "description": "Halloween is a celebration on the eve of the Western Christian feast of All Hallows' Day. It is widely believed that many Halloween traditions originated from the ancient Celtic harvest festival Samhain, and that this Gaelic observance was Christianized by the early Church.",
        "image": "http://trthaberstatic.s3-website-eu-west-1.amazonaws.com/resimler/372000/373170.jpg"
    },
    {
        "id": 3,
        "name": "Jen's Birthday",
        "start_date": "01/30/2017",
        "description": "Jen turns 24! Woo!",
        "image": "http://i2.mirror.co.uk/usvsth3m/article5478838.ece/ALTERNATES/s615/JS36186122.jpg"
    }
];
