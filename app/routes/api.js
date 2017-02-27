module.exports=function(app, express, pool) {

    var apiRouter = express.Router();

    apiRouter.route('/proizvodi').get(function(req,res){

        pool.getConnection(function(err, connection){

            if (err) {
                res.json({"code" : 100, "status" : "Error in connection database"});
                return;
            }

            connection.query('SELECT * FROM proizvodi', function(err, rows, fields) {
                console.log('usao api');

                connection.release();

                if (!err){

                    res.json({ status: 'OK', proizvodi:rows });

                }

                else
                    res.json({ status: 'NOT OK' });
            });

        });

    }).post(function(req,res) {

        pool.getConnection(function (err, connection) {

            if (err) {
                res.json({"code": 100, "status": "Error in connection database"});
                return;
            }

            console.log(req.body.proizvod);

            var proizvod = {
                id: req.body.proizvod.id,
                naziv: req.body.proizvod.naziv,
                zemljaPodrijetla: req.body.proizvod.zemljaPodrijetla,
                cijena: req.body.proizvod.zemljaPodrijetla,
                kategorija: req.body.proizvod.kategorija
            };

            connection.query('INSERT INTO proizvodi SET ?', proizvod, function (err, data) {

                connection.release();


                if (!err) {

                    res.json({status: 'OK', insertId: data.insertId});

                }

                else
                    res.json({status: 'NOT OK'});
            });

        });
    }).delete(function (res,req) {
        pool.getConnection(function(err, connection){

            if (err) {
                res.json({"code" : 100, "status" : "Error in connection database"});
                return;
            }
            console.log('U DELETEU SAM');
           // console.log(req.params.id);/*
           // var idProizvoda=req.params.id;*/

            connection.query('DELETE FROM proizvodi WHERE id = ?', req.params.proizvod.id , function(err, data) {

                connection.release();



                if (!err){

                    res.json({ status: 'OK', affectedRows :data.affectedRows });

                }

                else
                    res.json({ status: 'NOT OK' });
            });

        });

    });

    return apiRouter;
};
