
export function latestData(){
    const latestData = fetch(`/latestblock`, {method:'GET'})
    .then((data) => data.json())
    console.log(latestData)
    return{
        type:'GET_LATEST',
        payload:latestData
    }
}

export function singleBlock(){
    
    return{
        type:'GET_BLOCK',
    }
}

export function singleTransaction(){
    
    return{
        type:'GET_TRANSACTION',
    }
}
