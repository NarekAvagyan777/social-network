import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};


export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        let navigate = useNavigate();
        if(!props.isAuth) {
            navigate('/login');
        }

        return <Component {...props} />
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}