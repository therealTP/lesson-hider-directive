angular.module('lessonApp').controller('lessonCtrl', function($scope, lessonSvc) {
  $scope.schedulePromise = lessonSvc.getLessonData();

  $scope.announceDay = function(lesson, day) {
    if(day) {
      alert(lesson + ' is on ' + day);
    } else {
      alert(lesson + ' is not scheduled');
    }
  };

  $scope.toggle = true;

  $scope.refreshView = function(elem, toggle) {
    for (var i = 0; i < $scope.schedule.length; i++) {
      if ($scope.schedule[i].lesson === $scope.lesson) {
        if (toggle) {
          elem.css('text-decoration', 'line-through');
        }
        $scope.lessonDay = $scope.schedule[i].weekday;
      }
    }
  };

  $scope.deleteLesson = function(day) {
    console.log($scope.schedule);
    for (var i = 0; i < $scope.schedule.length; i++) { // for each item in schedule
      if ($scope.schedule[i].weekday === day.day) { // if equal to day
        $scope.schedule.splice(i, 1);
        console.log($scope.schedule);
      }
    }

    //refresh view, showing that day no longer on schedule
  };

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
});
