import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {

    const {products} = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice , setTotalPrice] = useState(0);



    return (
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
                            if (!product) {
                                return (
                                    <tr className="text-center" key={item.id}>
                                        <td>Unknown Product</td>
                                        <td>{item.qty}</td>
                                        <td>Rp 0</td>
                                    </tr>
                                );
                            }
    
                            return (
                                <tr className="text-center" key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        {`Rp ${(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`}
                                    </td>
                                </tr>
                            );
                        })}
                        
                    </tbody>
            </table>
        )
}

export default TableCart;