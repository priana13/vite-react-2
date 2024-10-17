import InputForm from "../Elements/Input/Index";
import Tombol from "../Elements/Tombol/Index";


const FormRegister = () => {

    return (
        <>

        <form action="">

        <InputForm label="Nam" type="nama" placeholder="Your Name" />

        <InputForm label="Email" type="email" placeholder="example@mail.com" />

        <InputForm label="Password" type="password" placeholder="******" />  

         <InputForm label="Password Verify" type="password" placeholder="******" />        

        <Tombol bg="bg-blue-600" >Register</Tombol>

       </form>
        
        </>
    )
}
export default FormRegister;