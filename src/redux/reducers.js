
import { combineReducers} from 'redux';

const getData = (state={}, action) => {
    switch(action.type){

        case 'GET_LATEST':
            return {...state, latestdata:action.payload}
        case 'GET_BLOCK':
            const singleBlockData = {
                "hash":"b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da",
                "ver":1,
                "vin_sz":1,
                "vout_sz":2,
                "lock_time":"Unavailable",
                "size":258,
                "relayed_by":"64.179.201.80",
                "block_height": 12200,
                "tx_index":"12563028",
        }
            return {...state, singleBlockData:singleBlockData}

        case 'GET_TRANSACTION':
            const singleTransaction = {
                "hash":"b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da",
                "ver":1,
                "vin_sz":1,
                "vout_sz":2,
                "lock_time":"Unavailable",
                "size":258,
                "relayed_by":"64.179.201.80",
                "block_height": 12200,
                "tx_index":"12563028",
        }
            return {...state, singleTransaction:singleTransaction}
        
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getData
})




export default rootReducer


