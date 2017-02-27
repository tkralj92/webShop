/**
 * Created by tkralj on 8.2.2017..
 */

module.exports={

    port:  process.env.PORT || 8081,
    pool: {
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'webDucan',
        debug    :  false
    }

}