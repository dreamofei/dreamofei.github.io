mainMoudle.controller('dateCalcCtrl', function ($scope) {
    var baseObj = new Object();
    $scope.calc = function () {
        var beginDateValue = new Date($scope.baseObj.beginDate).valueOf();
        var resultDate = new Date(beginDateValue + $scope.baseObj.addDays * 24 * 60 * 60 * 1000);
        $scope.baseObj.resultDay = resultDate.getFullYear() + "-" + (resultDate.getMonth() + 1) + "-" + resultDate.getDate();
    }
});