import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";
import AuthLayouts from "../Layouts/AuthLayouts";

const RegisterPage = () => {

    return (
      
        <AuthLayouts title="Register">
            <FormRegister />
        </AuthLayouts> 
    )
}

export default RegisterPage;