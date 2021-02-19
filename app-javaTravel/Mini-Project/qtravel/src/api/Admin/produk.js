import {getApiNoAuthLb} from '../utils'

export default {
    getProduk(window){
        return getApiNoAuthLb()
        .get('/wisata')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    postProduk(window, wilayah, nama, deskripsi, kuantitas, harga, gambar, imgurl){
        return getApiNoAuthLb()
        .post('/wisata/', {
            wilayah : wilayah,
            nama : nama,
            deskripsi : deskripsi,
            kuantitas : kuantitas,
            harga : harga,
            gambar : gambar,
            imgurl: 'http://localhost:3000/api/container/images/download/'+ nama+ '.jpg'
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    deleteProduk(window, id){
        return getApiNoAuthLb()
        .delete('/wisata/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    putProduk(window, id, wilayah, nama, deskripsi, kuantitas, harga, gambar, imgurl){
        return getApiNoAuthLb()
        .put('/wisata/'+id ,{
            wilayah : wilayah,
            nama : nama,
            deskripsi : deskripsi,
            kuantitas : kuantitas,
            harga : harga,
            gambar : gambar,
            imgurl: imgurl
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    downloadImage(window, file){
        return getApiNoAuthLb()
        .get('container/images/download/'+file)
        .then(function(response){
            return response.config
        })
        .catch (function(err){
            console.log(err)
        })
    },
    // getProdukByName(window, nama){
    //     return getApiNoAuthLb()
    //     .get('wisata/getProdukByName?nama='+nama)
    //     .then(function(response){
    //         return response
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // },

    getProdukbyId(window, id){
        
        return getApiNoAuthLb()
        .get('/wisata/' + id )
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },

    postchart(window, id_product, id_customer, catatan,
        kuantity, diskon, kurir, total){
        return getApiNoAuthLB()
        .post('/charts/' ,{
            id_product : id_product,
            id_customer : id_customer,
            catatan : catatan,
            kuantity : kuantity,
            diskon : diskon,
            kurir : kurir,
            total : total
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    }
    
}