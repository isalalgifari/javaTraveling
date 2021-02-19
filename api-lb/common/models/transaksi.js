'use strict';

module.exports = function(Transaksi) {

    Transaksi.getTransaksiName = function(name, callback){
        new Promise(function(resolve, reject){
            // FIND NAME
            Transaksi.find({where : {destinasi : {like : name}}}, function(err, result){
                if(err) reject (err);
                if(result === null){
                    err = new Error("user not found");
                    err.statusCode = 404;
                    reject(err)
                }
                resolve(result);
            });
        }).then(function(res){
            if(!res) callback(err);S
            return callback(null, res[0]);
        }).catch(function(err){
            callback(err);
        });
    };

    Transaksi.remoteMethod(

        'getTransaksiName',
        {
            description: 'get user by name',
            accepts: [{
                 arg: 'nama', type: 'string'}
        ],
        returns: {
            arg: 'res', type: 'object', root:true
        },
        http: {path: '/getTransaksiByName', verb: 'get'}
        },

        'getWisataName',
        {
            description: 'get user by name',
            accepts: [{
                 arg: 'nama', type: 'string'}
        ],
        returns: {
            arg: 'res', type: 'object', root:true
        },
        http: {path: '/getWisataByName', verb: 'get'}
        },

        'getCustomerName',
        {
            description: 'get user by name',
            accepts: [{
                 arg: 'nama', type: 'string'}
        ],
        returns: {
            arg: 'res', type: 'object', root:true
        },
        http: {path: '/getCustomerByName', verb: 'get'}
        }
    );

    // Wisata.remoteMethod(
    //     'getWisataName',
    //     {
    //         description: 'get user by name',
    //         accepts: [{
    //              arg: 'nama', type: 'string'}
    //     ],
    //     returns: {
    //         arg: 'res', type: 'object', root:true
    //     },
    //     http: {path: '/getWisataByName', verb: 'get'}
    //     }
    // );

    // Customer.remoteMethod(
    //     'getCustomerName',
    //     {
    //         description: 'get user by name',
    //         accepts: [{
    //              arg: 'nama', type: 'string'}
    //     ],
    //     returns: {
    //         arg: 'res', type: 'object', root:true
    //     },
    //     http: {path: '/getCustomerByName', verb: 'get'}
    //     }
    // );

};
