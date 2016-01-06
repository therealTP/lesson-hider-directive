angular.module('lessonApp').directive('lessonHider', function() {
  return {
    templateUrl: 'js/hiderTmpl.html',
    restrict: 'E',
    scope: { //isolated scope
      lesson: '=',
      dayAlert: '&',
      deleteLesson: '&'
    },
    controller: 'lessonCtrl',
    link: function($scope, elem, attrs) {
      $scope.schedulePromise
      .then(
        function(response) {
          $scope.schedule = response.data;
          $scope.refreshView(elem, $scope.toggle);
        }
      );
    }
  };
});
