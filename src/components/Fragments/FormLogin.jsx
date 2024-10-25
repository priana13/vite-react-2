import { login } from "../../services/auth.service.js";
import InputForm from "../Elements/Input/Index";
import Tombol from "../Elements/Tombol/Index";
import axios from 'axios';
import {useState} from 'react';


const FormLogin = () => {

    const [pesan, setPesan] = useState('')


    const handleLogin = (event) => {

        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value; 

        const data = {
            username : username,
            password: password
        };

        login(data , (status, res) => {

            if(status){

                localStorage.setItem('token' , res);

                 window.location.href = "/products"

            }else{
                setPesan(res.response.data)
            }
        });
       
    }

    return (
        <div className="w-full">

            <form onSubmit={handleLogin}>

            <InputForm label="Username" name="username" type="text" placeholder="Jhon Doe" />

            <InputForm label="Password" name="password" type="password" placeholder="******" />

            <button type="submit" className={`text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-bg-blue-600-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}   
             >
               Login
            </button>


        </form>

        <p className="text-red-500">{pesan}</p>
        
        </div>
    )
}
export default FormLogin;