import { createContext, useState } from "react";

const DataStatusContext = createContext("");

export function DataStatusProvider(props){

    const [dataStatus, setDataStatus] = useState("");

    function handleDataStatusChange(status){
        if(status === "loaded" ||  status === "error" || status ==="loading"){
            setDataStatus(status);
        }
    }

    const context  = {
        status: dataStatus,
        change: handleDataStatusChange,
    };

    return (
        <DataStatusContext.Provider value={context}>
            {props.children}
        </DataStatusContext.Provider>
    )
}

export default DataStatusContext;