import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../services/product.service";
import { useLogin } from "../../hooks/useLogin";
import { useTotalPrice } from "../../context/TotalPriceContext";
import { Formik } from 'formik';



const ProductDetailPage = () => {

    const {id} = useParams();

    const [product , setProduct] = useState({});

    const username = useLogin();

    const {total} = useTotalPrice()

    const handleLogout = () => {

        localStorage.removeItem('token');    

        window.location.href = '/login'
    }

    const tambah = (e)=>{

        e.preventDefault();

        console.log('test')

        setQty(qty + 1);
    }


    useEffect(() => {

        getDetailProduct(id , (res) => {

            setProduct(res);

        });

        console.log(product)

    },[]);

    return (<>

            <div className="flex justify-end bg-blue-500 h-15 items-center text-white">
                <span className="mx-3">{username}</span>              

                <span className="mx-2">Item: {total.toLocaleString('id-ID')}</span>

                <button onClick={handleLogout} type="submit" className={`text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-bg-blue-600-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}   
                >
                Logout
                </button>


            </div>

            {product && 
            <div className="flex justify-center items-center w-[80%]">
                <div className="flex font-sans">
                    <div className="flex-none w-48 relative">
                        <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    </div>
                    <form className="flex-auto p-6">
                        <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {product.title}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            ${product.price}
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm">
                            {product.description}
                        </div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <div className="flex-auto flex space-x-4">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Buy now
                            </button>
                            <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Add to bag
                            </button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                        </div>
                        <p className="text-sm text-slate-700">
                        Free shipping on all continental US orders.
                        </p>
                    </form>
                </div>


                <Formik
                    initialValues={{ qty: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.qty) {
                        errors.qty = 'Required';
                        } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.qty)
                        ) {
                        errors.qty = 'Invalid qty address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {

                        setTimeout(() => {

                        alert(JSON.stringify(values, null, 2));

                        setSubmitting(false);

                        }, 400);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>                       

                    <div className="flex">
                        <button className="bg-gray-500 px-3 rounded-lg">-</button>
                        <input type="number" className="border-2 border-gray-20 my-2 mx-2" 
                        // value={qty}                      
                         name="qty"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.qty}
                        
                        />
                        <button type="button" className="bg-gray-500 px-3 rounded-lg" onClick={() => y }>+</button>
                    </div>



                        {errors.qty && touched.qty && errors.qty}
                       
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </form>
                    )}
                    </Formik>


            </div>
            }
    
    </>)
}


export default ProductDetailPage;