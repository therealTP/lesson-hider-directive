angular.module('lessonApp').service('lessonSvc', function($http) {
  this.getLessonData = function() {
    return $http.get('js/schedule.json');
  };
});
