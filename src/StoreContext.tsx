import React from "react";
import {StoreType} from "./Redux/state";




export type ProviderPropsType = {
    store: any
    children:React.ReactNode
}

const StoreContext = React.createContext({} as StoreType);

export const Provider = (props: ProviderPropsType)=> {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext;