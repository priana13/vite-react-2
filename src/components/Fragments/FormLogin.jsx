import InputForm from "../Elements/Input/Index";
import Tombol from "../Elements/Tombol/Index";


const FormLogin = () => {

    return (
        <>

        <form action="">

        <InputForm label="Email" type="email" placeholder="example@mail.com" />

        <InputForm label="Password" type="password" placeholder="******" />        

        <Tombol bg="bg-blue-600" >Login</Tombol>

       </form>
        
        </>
    )
}
export default FormLogin;