import { Link } from "react-router-dom";
import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
    const {children , title , type} = props;
    return (
    
        <div className="w-[80%] sm:w-[30%] mx-auto rounded-lg p-6">

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
    )
}

export default AuthLayouts;