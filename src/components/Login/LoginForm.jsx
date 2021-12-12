import React from "react";
import { Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControls/FormsControls";

const LoginForm = (props) => {
  return  <form onSubmit={props.handleSubmit}>
  <div>
    <Field validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>
  </div>
  <div>
    <Field validate={[required]} placeholder={'Password'} name={'password'} component={Input} type='password'/>
  </div>
  <div>
    <Field validate={[required]} type={"checkbox"}  name={'rememberMe'} component={Input}/> remember me
  </div>
  <div>
    <button>Log in</button>
  </div>
</form>
}

export default LoginForm