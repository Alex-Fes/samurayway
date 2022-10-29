import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StoreType} from "../Redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const MapStateToPropsForRedirect = (state: StoreType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsForRedirectType) {

        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={"/login"}/>;
        return <Component {...restProps as T} />
    }

    let ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}