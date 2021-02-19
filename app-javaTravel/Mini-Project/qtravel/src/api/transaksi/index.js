import { getApiNoAuthLb } from "../utils"

export default {
    getTransaksi(window){
        return getApiNoAuthLb()
        .get('/transaksis')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    deleteTransaksi(window, id){
        return getApiNoAuthLb()
        .delete('/transaksis/'.concat(id))
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
        postTransaksi(window, id_product, id_customer, identitas, tgl, kuantitas, diskon, catatan, total, metode_bayar, status){
        return getApiNoAuthLb()
        .post('/transaksis/' ,{
            id_product : id_product,
            id_customer : id_customer,
            identitas : identitas,
            tgl : tgl,
            kuantitas : kuantitas,
            diskon : diskon,
            catatan : catatan,
            total : total,
            metode_bayar : metode_bayar,
            status : status
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}