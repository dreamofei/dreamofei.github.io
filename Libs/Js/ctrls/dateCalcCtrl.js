mainMoudle.controller('dateCalcCtrl', function ($scope) {
    var baseObj = new Object();
    $scope.calc = function () {
        var beginDateValue = new Date($scope.baseObj.beginDate).valueOf();
        var resultDate = new Date(beginDateValue + $scope.baseObj.addDays * 24 * 60 * 60 * 1000);
        $scope.baseObj.resultDay = resultDate.getFullYear() + "-" + (resultDate.getMonth() + 1) + "-" + resultDate.getDate();
    }

    //overLay
    $scope.overLay = { visibility: 'visible' };
    $scope.openOverLay = function () {
        $scope.overLay = { visibility: 'hidden' };
    }

    $scope.rose = function(left, height, src) {

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

            var src = "../../Sources/imgs/s" + Math.floor(Math.random() * 2 + 1) + ".png";//两张图片分别为"s1.png"、"s2.png"

            $scope.rose(left, height, src);

        }, 500);
    }


    //End overLay

});