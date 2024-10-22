import { Fragment, useState } from "react";
import CardProduct from "../Elements/CardProduct/Index";
import Tombol from "../Elements/Tombol/Index";


const products = [
    {
        'id' : 1, 
        'title': 'Sepatu Baru 01',
        'price' : 100000,
        'descpriction' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'image' : '/sepatu.jpeg'
    },
    {
        'id' : 2, 
        'title': 'Sepatu Baru 02',
        'price' : 300000,
        'descpriction' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'image' : '/sepatu.jpeg'
    },
    {
        'id' : 3, 
        'title': 'Sepatu Baru 03',
        'price' : 500000,
        'descpriction' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'image' : '/sepatu.jpeg'
    }
]; 



const ProductPage = () => {  

    const [cart , setCart] = useState([
        {
            id: 1,
            name: "Sepatu Lama",
            qty: 1
        }
    ]);

    const handleLogout = () => {

        localStorage.removeItem('email');
        localStorage.removeItem('password');

        window.location.href = '/login'
    }


    const handleAddToCart = () => {
        setCart([
            ...cart,
            {
                id: 1,
                name: 'test',
                qty: 1
            }
        ])
    }
   


    return (
       
        <Fragment >
            <div className="flex justify-end bg-blue-500 h-15 items-center text-white">
                <span className="mx-3">herian.sap@gmail.com</span>
                <Tombol bg="bg-blue-600" onClick={handleLogout} > Logout </Tombol>
            </div>
            <div className="flex">
                <div className="flex justify-center gap-2 w-3/4"> 
                    
                    {products.map((product) => {

                        return (                                 

                            <CardProduct key={product.id}>
                                <CardProduct.Image image={product.image} />
                                <CardProduct.Description   title={product.title}  >
                                    {product.descpriction}
                                </CardProduct.Description>
                                <CardProduct.Footer price={product.price} addToCart={handleAddToCart} />
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

                                        <tr className="text-center" key={item.id}>
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