import { Fragment, useEffect, useState } from "react";
import CardProduct from "../Elements/CardProduct/Index";
import Tombol from "../Elements/Tombol/Index";
import axios from "axios";
import { getProduct } from "../../services/product.service";



const ProductPage = () => {  

    const [cart , setCart] = useState([]);
    const [products , setProducts] = useState([]);

    const handleLogout = () => {

        localStorage.removeItem('email');
        localStorage.removeItem('password');

        window.location.href = '/login'
    }


    const handleAddToCart = (id) => {  
        
        if(cart.find(item => item.id == id) ) {           
            // Buat cart baru dengan qty yang ditambahkan
            const updatedCart = cart.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        qty: item.qty + 1 // Tambah qty
                    };
                }
                return item;
            });

            // Update state cart dengan cart yang sudah diupdate
            setCart(updatedCart);

        }else{
            setCart([
                ...cart,
                {
                    id: id,
                    name: 'test',
                    qty: 1
                }
            ])

        }       
    }
   
    useEffect(() => {

        console.log(products.length)

      //  getProduct();

      getProduct((data) => {

        setProducts(data);        

      });


    },[]);


    return (
       
        <Fragment >
            <div className="flex justify-end bg-blue-500 h-15 items-center text-white">
                <span className="mx-3">herian.sap@gmail.com</span>
                <Tombol bg="bg-blue-600" onClick={handleLogout} > Logout </Tombol>
            </div>
            <div className="flex">
                <div className="flex justify-center gap-2 w-3/4 flex-wrap"> 
                    
                    {products.length > 0 && products.map((product) => {

                        return (                                 

                            <CardProduct key={'prod'+product.id}>
                                <CardProduct.Image image={product.image} />
                                <CardProduct.Description   title={product.title}  >
                                    {product.descpriction}
                                </CardProduct.Description>
                                <CardProduct.Footer id={product.id} price={product.price} addToCart={handleAddToCart} />
                            </CardProduct>                  
                        
                        );

                    })}
                    
                </div>

                <div className="w-1/4">

                    <div className="mt-6 bg-gray-200 p-3 mx-5">
                        <table className="table-auto border-separate border-2" >
                            <thead>
                                <tr className="text-center">
                                    <td>Product</td>
                                    <td>Qty</td>
                                    <td>Price</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => {

                                    const product = products.find((product) => product.id === item.id);

                                    // console.log(item)
                                    return (

                                        <tr className="text-center" key={product.id}>
                                            <td>{product.title}</td>
                                            <td>{item.qty}</td>
                                            <td> {(item.qty * product.price).toLocaleString('id-ID' , {styles: 'currency' , currency: 'IDR'})}</td>
                                        </tr>

                                    )
                                })}
                               
                            </tbody>
                        </table>

                        <Tombol bg="bg-orange-600 mt-4">Checkout</Tombol>
                    </div>

                </div>



            </div>
                   

        </Fragment>
    );
}

export default ProductPage;