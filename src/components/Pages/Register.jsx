import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";
import AuthLayouts from "../Layouts/AuthLayouts";

const RegisterPage = () => {

    return (
      
        <AuthLayouts title="Register">
            <FormRegister />

            <p>Has an acount? <Link className="text-blue-700" to="/login">Login Now</Link></p>

        </AuthLayouts> 
    )
}

export default RegisterPage;