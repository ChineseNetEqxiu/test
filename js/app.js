angular.module('test', ['questions', 'completions', 'ngSanitize'])
    .controller('QuestionListCtrl', ['$scope', '$http', 'questions', 'completions', '$compile', function ($scope, $http, questions, completions, $compile) {
        $scope.keywords = {title: ''};
        //$http.get('assets/qa.json')
        //    .then(function (res) {
        //        $scope.questions = res.data;
        //    });
        $scope.questions = questions;
        $scope.completions = completions;
        $scope.answerOnly = false;

        Mousetrap.bind('s u p e r m a n', enableSupermanMode);
        function enableSupermanMode() {
            var $keywords = $('#keywords');
            $keywords.attr('ng-model', 'keywords.title')
                .attr('bind-slash', 'true')
                .attr('placeholder', '点击输入框，或键入\'\/\'，录入关键字（超人模式开启）')
                .removeAttr('readonly');
            $compile($keywords)($scope);
            setTimeout(function () {
                $keywords.focus().select();
            }, 0);
        }
        $scope.$on('$destroy', function () {
            Mousetrap.unbind('superman', enableSupermanMode);
        });
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