webApp.factory('proizvodFactory',function($http){
   return{

       getData:function(callback){
           $http.get('/api/proizvodi',{cache:true}).success(callback);
           console.log('usao factory');

       },
       postData:function(proizvod, callback){

           $http.post('/api/proizvodi',{proizvod: proizvod}).success(callback);

       },
       deleteData:function (proizvod,callback) {
           $http.delete('/api/proizvodi',{proizvod: proizvod}).success(callback);
       }

   }
});