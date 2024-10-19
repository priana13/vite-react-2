import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import AuthLayouts from "../Layouts/AuthLayouts";

const LoginPage = () => {

    return (
      
        <AuthLayouts title="Login" type="login">

            <FormLogin />
           
        </AuthLayouts> 
    )
}

export default LoginPage;