import { useRouteError  } from "react-router-dom";

const ErrorPage = ()=> {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div>
                 <h1 className="text-3xl">Ops!</h1>
                <p className="text-xl text-gray-600">Sorry, an uexpected error has accurred</p>
                <p className="text-xl text-gray-600">{error.statusText || error.message}</p>
            </div>
           
        </div>
    )
}

export default ErrorPage;