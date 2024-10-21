import InputForm from "../Elements/Input/Index";
import Tombol from "../Elements/Tombol/Index";


const FormLogin = () => {


    const handleLogin = (event) => {

        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value; 

        localStorage.setItem('email' , email);
        localStorage.setItem('password' , password);

       window.location.href = "/products"
    }

    return (
        <>

        <form onSubmit={handleLogin}>

        <InputForm label="Email" name="email" type="email" placeholder="example@mail.com" />

        <InputForm label="Password" name="password" type="password" placeholder="******" />        

        <Tombol bg="bg-blue-600 w-full" type="submit" >Login</Tombol>

       </form>
        
        </>
    )
}
export default FormLogin;