

webApp.controller('proizvodiCtrl',
    function ($scope,$http,proizvodFactory) {

    $scope.noviP = false;

    proizvodFactory.getData(function (data) {
        console.log('uso u controler');
        $scope.proizvodi = data.proizvodi;

    });


        $scope.addProizvod = function () {
            $scope.noviP = true;
        }
        $scope.addProizvodSave = function ()
        {console.log($scope.pId);
        var pomProizvod =
                        {id : $scope.pId,
                        naziv : $scope.pNaziv,
                        zemljaPodrijetla: $scope.pZemlja,
                        cijena: $scope.pCij,
                        kategorija:$scope.pKat
                        };
            console.log(pomProizvod);
            proizvodFactory.postData(pomProizvod, function(data) {
                console.log(data);
            });
            $scope.noviP = false;

        };

        $scope.brisiP = function (num) {
            console.log(num);
            $scope.proizvodi[num]
            proizvodFactory.deleteData($scope.proizvodi[num], function(data) {
                console.log(data);
            });
        };

});

webApp.controller('proizvodCtrl',function ($scope,$http,proizvodFactory,$routeParams) {
    $scope.Id = $routeParams.x;
    console.log($routeParams.x);
/*
    $scope.jedanProizvod = {};
    proizvodFactory.getData(function (data) {
        console.log('uso u controler');
        $scope.proizvodi = data.proizvodi;
        console.log($scope.proizvodi);
    });

   var dodjeli = function () {
     $scope.jedanProizvod = $scope.proizvodi[1];
       console.log($scope.jedanProizvod);
   };*/

});

webApp.controller('loginCtrl',
    function ($scope) {



});