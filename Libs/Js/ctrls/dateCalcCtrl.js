mainMoudle.controller('dateCalcCtrl', function ($scope, $timeout) {
    var baseObj = new Object();

    //动画相关
    $scope.LROn = false;//当LROn为true时,ng-class生效，开始d动画
    $scope.LRIsShow = { visibility: 'hidden' };
    $scope.CenterOn = false;
    $scope.CenterIsShow = { visibility: 'hidden' };
    $scope.openLROn = function () {
        $scope.LROn = true;
        $scope.LRIsShow = { visibility: 'visible' };
        $timeout(function () {
            $scope.CenterOn = true;
            $scope.CenterIsShow = { visibility: 'visible' };
        }, 5000);
    }
    //End 动画相关

    $scope.calc = function () {
        var beginDateValue = new Date($scope.baseObj.beginDate).valueOf();
        var resultDate = new Date(beginDateValue + $scope.baseObj.addDays * 24 * 60 * 60 * 1000);
        $scope.baseObj.resultDay = resultDate.getFullYear() + "-" + (resultDate.getUTCMonth() + 1) + "-" + resultDate.getDate();

        //动画相关
        if ($scope.baseObj.resultDay == '2015-9-23') {
            $timeout($scope.openOverLay, 10000);
            //$timeout($scope.openOverLay, 0);
        }
        //End 动画相关
    }


    //overLay
    //$scope.overLay = { visibility: 'visible' };
    $scope.overLay = { visibility: 'hidden' };
    $scope.openOverLay = function () {
        $scope.overLay = { visibility: 'visible' };
        $scope.beginRose();

        $timeout(function () {
            //$scope.overLay = { visibility: 'hidden' };
            $timeout(function () {
                $scope.overLay = { opacity: 0.7 };
                $timeout(function () {
                    $scope.overLay = { opacity: 0.3 };
                    $timeout(function () {
                        $scope.overLay = { visibility: 'hidden' };
                        $scope.openLROn();
                    }, 260);
                }, 260);
            },260);
        }, 20000);
    }

    $scope.rose = function (left, height, src) {

        var div = document.createElement("div");

        var img = document.createElement("img");

        div.appendChild(img);

        img.className = "roll";

        img.src = src;

        div.style.left = left + "px";

        div.style.height = height + "px";

        div.className = "aRoseDiv";

        document.getElementById("roseZone").appendChild(div);

        setTimeout(function () {

            document.getElementById("roseZone").removeChild(div);

            // console.log(window.innerHeight);

        }, 5000);

    }

    $scope.beginRose = function () {
        setInterval(function () {

            var left = Math.random() * window.innerWidth;

            var height = Math.random() * window.innerHeight;

            var src = "../../Sources/imgs/R" + Math.floor(Math.random() * 5 + 1) + ".png";//两张图片分别为"s1.png"、"s2.png"

            $scope.rose(left, height, src);

        }, 300);
    }


    //End overLay

});