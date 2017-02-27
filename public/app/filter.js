
webApp.filter('mojfilter', function(){

    return function (input, sem){

        var output = [];
        if(sem == undefined || sem.length<1){
            angular.forEach(input, function (item) {
                output.push(item);
                // console.log(output);
            })
            return output;
        }


        angular.forEach(input, function (item) {
           // console.log(item);
            if(item.naziv == sem){output.push(item);}
        });
        return output;
    }
});