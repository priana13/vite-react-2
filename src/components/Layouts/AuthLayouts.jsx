import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
    const {children , title , type} = props;

    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);

    console.log(isDarkMode)

    return (
        <div className={`${isDarkMode && "bg-slate-800"} h-screen flex justify-items-center`}>

            <button className="bg-blue-500 text-white p-2 absolute rounded-lg right-0" onClick={() => setIsDarkMode( !isDarkMode )}>Dark</button>

            <div className={`w-[80%] sm:w-[50%] mx-auto rounded-lg p-6 my-auto ${isDarkMode && "bg-white"} ${!isDarkMode && "bg-blue-100"}`}>

                <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>   
                <p className="font-medium font-slate-500 text-center">Please Enter youre detail</p>

                {children}  

                <p> 
                    {type === 'login' ? "Don't have an account? " : "Already have an account? "} 
                    
                    {type === 'login' && (
                        <Link className="text-blue-700" to="/register">Register Now</Link>
                    )}

                    {type === 'register' && (
                        <Link className="text-blue-700" to="/login">Login</Link>
                    )}
                    
                </p>

            </div>


        </div>
    
        
    )
}

export default AuthLayouts;