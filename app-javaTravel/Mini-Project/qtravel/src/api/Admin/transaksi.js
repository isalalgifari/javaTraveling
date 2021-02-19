import {getApiNoAuth, getApiNoAuthLb} from '../utils'

export default {
    getTransaksi(window){
        return getApiNoAuthLb()
        .get('transaksis')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
}