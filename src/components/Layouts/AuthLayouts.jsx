import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
    const {children , title} = props;
    return (
    
        <div className="w-[80%] sm:w-[40%] mx-auto rounded-lg p-6">

          <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>   
          <p className="font-medium font-slate-500 text-center">Please Enter youre detail</p>

            {children}    

        </div>
    )
}

export default AuthLayouts;