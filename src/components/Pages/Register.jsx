import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";
import AuthLayouts from "../Layouts/AuthLayouts";

const RegisterPage = () => {

    return (
      
        <AuthLayouts title="Register" type="register">

            <FormRegister />          

        </AuthLayouts> 
    )
}

export default RegisterPage;