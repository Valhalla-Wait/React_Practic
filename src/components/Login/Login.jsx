import React from "react"
import { reduxForm } from "redux-form"
// import LoginForm from "./LoginForm"
import {connect} from 'react-redux'
import { login } from "../../redux/auth-reducer"
import { Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControls/FormsControls";
import { Redirect } from "react-router-dom";
import style from './../common/formsControls/FormsControls.module.css'

const LoginForm = (props) => {
  return  <form onSubmit={props.handleSubmit}>
  <div>
    <Field validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>
  </div>
  <div>
    <Field validate={[required]} placeholder={'Password'} name={'password'} component={Input} type='password'/>
  </div>
  <div>
    <Field type={"checkbox"}  name={'rememberMe'} component={Input}/> remember me
  </div>

  {props.error && <div className={style.formSummaryError}>
    {props.error}
  </div>}
  
  <div>
    <button>Log in</button>
  </div>
</form>
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  } 

  if(props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>


}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login}) (Login)