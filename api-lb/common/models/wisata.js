'use strict';

module.exports = function(Wisata) {

    Wisata.getWisataName = function(name, callback){
        new Promise(function(resolve, reject){
            // FIND NAME
            Wisata.find({where : {nama : {like : name}}}, function(err, result){
                if(err) reject (err);
                if(result === null){
                    err = new Error("user not found");
                    err.statusCode = 404;
                    reject(err)
                }
                resolve(result);
            });
        }).then(function(res){
            if(!res) callback(err);
            return callback(null, res[0]);
        }).catch(function(err){
            callback(err);
        });
    };

    Wisata.remoteMethod(
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
        }
    );

};
