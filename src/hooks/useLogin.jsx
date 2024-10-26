import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";


export const useLogin = () => { 

    const [username, setUsername ] = useState("");


    useEffect(() => {    

        if(!localStorage.getItem('token')){

            window.location.href = '/login'

        }else{
            
          jwtDecode(localStorage.getItem('token')) ;

        }

        //return username;
               
    },[])

}