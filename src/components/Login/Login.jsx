import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { useNavigate } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';


const LoginForm = (props) => {
    
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={"Email"} 
                           name={"email"}
                           validate={[required]} 
                           component={Input} />
                </div>
                <div className={style.passwordDiv}>
                    <Field placeholder={"Password"} 
                           type={"password"}
                           name={"password"}
                           validate={[required]}  
                           component={Input} />
                </div>
                <div>
                    <Field type={"checkbox"} 
                           name={"rememberMe"}
                           component={Input} /> Remember me
                </div>
                { props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    
    let navigate = useNavigate();

    if(props.isAuth) {
        return navigate("/profile");
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);