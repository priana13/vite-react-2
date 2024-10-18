import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import AuthLayouts from "../Layouts/AuthLayouts";

const LoginPage = () => {

    return (
      
        <AuthLayouts title="Login">
            <FormLogin />
            <p>Don't have an acount? <Link className="text-blue-700" to="/register">Register Now</Link></p>
        </AuthLayouts> 
    )
}

export default LoginPage;