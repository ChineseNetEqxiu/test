angular.module('test', [])
    .controller('QuestionListCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.keywords = '';
        $http.get('assets/qa.json')
            .then(function (res) {
                $scope.questions = res.data;
            });
    }]);