import React from "react";

const Dataloader= (props) => {
    const formData = (data) => {
        return(
            Object.entries(data).map(([key, value], i) => {
                return(
                    <div className="formData-row" key={i}>
                        <div className="formData-row__label">{key}</div>
                        <div className="formData-row__value">{value}</div>
                    </div>
                )
            }) 
            
            
        )
    }
    if(props.data) {
        return(
            <div className="page">
                <h1 className="page-title">{props.title}</h1>
                <div className="formData">
                    {formData(props.data)}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="page-loading ">Page is loading..</div>
        )
    }
}

export default Dataloader;