import {getApiNoAuth, getApiNoAuthLb} from '../utils'

export default {
    getCustomer(window){
        return getApiNoAuthLb()
        .get('customers')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
}