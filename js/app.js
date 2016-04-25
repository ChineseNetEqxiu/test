angular.module('test', ['questions', 'completions'])
    .controller('QuestionListCtrl', ['$scope', '$http', 'questions', 'completions', function ($scope, $http, questions, completions) {
        $scope.keywords = {title: ''};
        //$http.get('assets/qa.json')
        //    .then(function (res) {
        //        $scope.questions = res.data;
        //    });
        $scope.questions = questions;
        $scope.completions = completions;
    }])
    .directive('bindSlash', function () {
        return function ($scope, $element) {
            Mousetrap.bind('/', focusSearch);
            function focusSearch() {
                setTimeout(function () {
                    $element.focus().select();
                }, 0);
            }
            $scope.$on('$destroy', function () {
                Mousetrap.unbind('/', focusSearch);
            });
        };
    });